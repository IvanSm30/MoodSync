import { Button, Checkbox, Flex, GetProp, Rate } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const timestamp = Date.now();
const date = new Date(timestamp);
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const formattedDate = `${day}.${month}.${year}`;

const Survey = () => {
  const [value, setValue] = useState(0);
  const [_checked, setChecked] = useState([]);
  const navigate = useNavigate();
  const onSave = () => {
    navigate("/home");
  };
  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues: any) => {
    setChecked(checkedValues);
  };
  return (
    <Flex gap={150} align="center" justify="center" vertical>
      <h1>Опрос</h1>
      <Rate
        style={{ fontSize: "125px", color: "#E1F3E9" }}
        count={10}
        allowHalf
        onChange={setValue}
        value={value}
      />
      <Flex vertical={true}>
        <Checkbox.Group onChange={onChange}>
          <Checkbox value="clean">Уборка</Checkbox>
          <Checkbox value="walk">Прогулка</Checkbox>
          <Checkbox value="sport">Спорт</Checkbox>
          <Checkbox value="meet">Встреча с друзьями</Checkbox>
          <Checkbox value="work">Работа</Checkbox>
          <Checkbox value="cook">Готовка</Checkbox>
          <Checkbox value="eat">Поход в кафе/ресторан</Checkbox>
          <Checkbox value="another">Другое...</Checkbox>
        </Checkbox.Group>
      </Flex>
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

export default Survey;
