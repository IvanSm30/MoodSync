import { Button, Flex } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const onClickPlus = () => {};
  const onClickDiary = () => {
    navigate("/diary");
  };
  const onClickAnalytics = () => {
    navigate("/analytics");
  };

  return (
    <>
      <Flex
        vertical={true}
        justify="center"
        align="center"
        style={{ height: "90vh" }}
      >
        <h1>Оцени свое настроение</h1>
        <Button onClick={onClickPlus} shape="circle" size="large">
          +
        </Button>
      </Flex>
      <Flex justify="space-around" align="flex-end">
        <Button onClick={onClickDiary} shape="round">
          Дневник
        </Button>
        <Button onClick={onClickAnalytics} shape="round">
          Аналитика
        </Button>
      </Flex>
    </>
  );
};

export default Main;
