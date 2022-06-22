import React, { FC } from "react";
import { Button, Select, Typography } from "antd";
import { ITodo } from "../types/todoTypes";
import { useAppDispatch } from "../hook";
import { removeTodo, changeState } from "../features/todoSlice";
const { Title } = Typography;
const { Option } = Select;

interface ITodoProps {
   todo: ITodo;
}

const TodoItem: FC<ITodoProps> = ({ todo }) => {
   const dispatch = useAppDispatch();
   const handleChange = (value: string) => {
      dispatch(changeState({ findId: todo.id, complited: value }));
   };
   const classes =
      todo.complited === "yes"
         ? "todobady complited__todo"
         : todo.complited === "or"
         ? "todobady proces"
         : "todobady";
   return (
      <div className={classes}>
         <Select
            defaultValue="No completed"
            style={{ width: 120 }}
            onChange={handleChange}
         >
            <Option value="yes">Completed</Option>
            <Option value="no">No completed</Option>
            <Option value="or">виполняетса</Option>
         </Select>
         <Title
            className={
               todo.complited === "yes"
                  ? "todo__text todo__text_complited"
                  : "todo__text"
            }
            style={{ marginBottom: 0, textDecoration: "underlime" }}
            level={3}
         >
            {todo.text}
         </Title>
         <div className="butons">
            <Button
               danger
               onClick={() => dispatch(removeTodo({ removeId: todo.id }))}
            >
               delete
            </Button>
         </div>
      </div>
   );
};

export default TodoItem;
