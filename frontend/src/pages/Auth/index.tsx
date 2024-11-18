import React from "react";
import { Button, Form, FormProps, Input } from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

const Auth = () => {
  const navigate = useNavigate();
  // const [name, setName] = useState<string | undefined>("");
  // const [password, setPassword] = useState<string | undefined>("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // setName(values.username);
    // setPassword(values.password);

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
        navigate("/home");
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    _errorInfo
  ) => {};

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
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
        rules={[{ required: true, message: "Пожалуйста введите ваш пароль!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
