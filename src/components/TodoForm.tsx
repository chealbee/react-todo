import { Button, Input } from "antd";
import React, { FC, useState } from "react";
import { useAppDispatch } from "../hook";
import { ITodo } from "../types/todoTypes";
import { addNewTodo } from "../features/todoSlice";

const TodoForm: FC = () => {
   const dispatch = useAppDispatch();
   const [value, setValue] = useState("");

   function setNewValue(e: React.ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);
   }
   function makeTodo() {
      if (value.length) {
         dispatch(
            addNewTodo({
               mewTodo: { text: value, id: Date.now(), complited: "no" },
            }),
         );
         setValue("");
      }
   }

   return (
      <form
         className="addForm"
         onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
         <Input
            value={value}
            onChange={setNewValue}
            placeholder="add todo text"
            size="large"
            className="form__input"
         />
         <Button onClick={makeTodo} size="large">
            add new todo
         </Button>
      </form>
   );
};

export default TodoForm;
