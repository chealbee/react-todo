import React, { FC, useEffect } from "react";
import { ITodo } from "../types/todoTypes";
import TodoItem from "./TodoItem";
import { Typography } from "antd";
import { useAppSelector } from "../hook";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { setInitialTodos } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const { Title } = Typography;

const Todos: FC = () => {
   const dispatch = useDispatch();
   const todos = useAppSelector(state => state.todo.todos);

   useEffect(() => {
      if (localStorage.getItem("todos")) {
         dispatch(
            setInitialTodos(JSON.parse(localStorage.getItem("todos") || "[]")),
         );
      }
   }, []);

   useEffect(() => {
      if (!todos.length) {
         localStorage.clear();
      } else {
         localStorage.setItem("todos", JSON.stringify(todos));
      }
   }, [todos]);

   return (
      <div className="todos">
         {todos.length ? (
            <TransitionGroup className="todo-list">
               {todos.map(todo => (
                  <CSSTransition key={todo.id} timeout={500} classNames="item">
                     <TodoItem todo={todo} />
                  </CSSTransition>
               ))}
            </TransitionGroup>
         ) : (
            <Title style={{ marginBottom: 0 }} level={3}>
               no todos...
            </Title>
         )}
      </div>
   );
};

export default Todos;
