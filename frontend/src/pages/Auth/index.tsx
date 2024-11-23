import React from "react";
import { Button, Form, FormProps, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
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
        name: values.username,
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
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 50 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Имя пользователя"
          name="username"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваше имя пользователя!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: "Пожалуйста введите ваш пароль!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item style={{paddingLeft: "145px"}}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
