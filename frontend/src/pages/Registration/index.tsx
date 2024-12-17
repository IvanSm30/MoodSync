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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        style={{ maxWidth: 350, textAlign: "center" }}
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
        <Form.Item
          style={{ textAlign: "left" }}
          name="gender"
          rules={[{ required: true }]}
        >
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
          <Button style={{ width: 350 }} type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
