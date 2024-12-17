import React from "react";
import { Button, Form, FormProps, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

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
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 350, textAlign: "center" }}
      >
        <Form.Item<FieldType>
          name="login"
          rules={[
            {
              required: true,
              message: "Введите логин!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Имя пользователя" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[
            {
              required: true,
              message: "Введите пароль!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>

        <Form.Item>
          <Button style={{ width: 350 }} type="primary" htmlType="submit">
            Вход
          </Button>
        </Form.Item>
        <Form.Item
          style={{
            width: 350,
            borderRadius: "8px",
            backgroundColor: "#1677ff",
          }}
        >
          <a href="/reg" style={{ color: "white" }}>
            Регистрация
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
