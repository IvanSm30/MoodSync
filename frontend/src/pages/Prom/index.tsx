import { Button, Flex } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ellipse from "../../assets/ellipse.png";

const Prom = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };
  return (
    <Flex
      vertical={true}
      justify="center"
      align="center"
      style={{ height: "80vh" }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={logo} height={250} style={{ position: "relative" }} />
        </div>
        <img src={ellipse} height={250} style={{ position: "absolute" }} />
      </div>
      <h1>MoodSync - Ваш личный трекер настроения для продуктивности</h1>
      <Button onClick={onClick} shape="round">
        Начать
      </Button>
    </Flex>
  );
};

export default Prom;
