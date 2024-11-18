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
        <div>
          <p>Есть мысли, которые стоит зафиксировать?</p>
          <Button onClick={onClickDiary} shape="round">
            Дневник
          </Button>
        </div>
        <div>
          <p>Хочу посмотреть аналитику моего состояния</p>
          <Button onClick={onClickAnalytics} shape="round">
            Аналитика
          </Button>
        </div>
      </Flex>
    </>
  );
};

export default Main;
