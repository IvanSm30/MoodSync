import React from "react";
import { Button, Form, FormProps, Input, message, Select } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  age?: number;
  gender?: string;
  login?: string;
  password?: string;
};

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        age: values.age,
        gender: values.gender,
        login: values.login,
        password: values.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        message.success("Регистрация прошла успешно");
        navigate("/prom");
        return response.json();
      })
      .catch((_error) => {
        message.error("Что-то пошло не так!");
      });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    _errorInfo
  ) => {
    message.error("Произошла ошибка");
  };

  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        style={{ maxWidth: 360 }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Ваше имя" />
        </Form.Item>
        <Form.Item<FieldType>
          name="age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Ваш возраст" />
        </Form.Item>
        <Form.Item name="gender" rules={[{ required: true }]}>
          <Select placeholder="Выберите пол">
            <Option value="male">Мужчина</Option>
            <Option value="female">Женщина</Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          name="login"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password type="password" placeholder="Пароль" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Зарегестрироваться
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
