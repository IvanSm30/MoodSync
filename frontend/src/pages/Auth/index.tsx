import React from "react";
import { Button, Form, FormProps, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  login?: string;
  password?: string;
};

const Auth = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: values.login,
        password: values.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        message.success("Авторизация прошла успешно");
        navigate("/prom");
        return response.json();
      })
      .catch((_error) => {
        message.error("Неправильные данные");
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
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 360 }}
      >
        <Form.Item<FieldType>
          name="login"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType> name="password" rules={[]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Вход
          </Button>
          <a href="/reg">Регистрация</a>
        </Form.Item>
      </Form>
    </>
  );
};

export default Auth;
