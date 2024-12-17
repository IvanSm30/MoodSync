import { Button, Flex, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const timestamp = Date.now();
const date = new Date(timestamp);
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const formattedDate = `${day}.${month}.${year}`;
const widthDocument = document.documentElement.clientWidth;

const Diary = () => {
  const navigate = useNavigate();
  const onSave = () => {
    navigate("/home");
  };

  return (
    <Flex gap={150} align="center" justify="center" vertical>
      <h1>Мой дневник</h1>
      <TextArea
        style={{ width: (widthDocument * 3) / 4 }}
        autoSize={{ minRows: 15, maxRows: 30 }}
      />
      <Flex gap={150} vertical={false}>
        <Button
          onClick={() => {
            navigate("/home");
          }}
          style={{ width: "120px" }}
        >
          На главную
        </Button>
        <div
          style={{
            width: "120px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          {formattedDate}
        </div>
        <Button style={{ width: "120px" }} onClick={onSave}>
          Сохранить
        </Button>
      </Flex>
    </Flex>
  );
};

export default Diary;
