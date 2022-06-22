import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/todoTypes";

type TodoState = {
   todos: ITodo[];
};
const initialState: TodoState = {
   todos: [],
};

type addType = {
   mewTodo: ITodo;
};
type removeId = { removeId: number };

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      addNewTodo: (state, action: PayloadAction<addType>) => {
         state.todos.push(action.payload.mewTodo);
      },
      removeTodo: (state, action: PayloadAction<removeId>) => {
         state.todos = state.todos.filter(
            todo => todo.id !== action.payload.removeId,
         );
      },
      changeState: (
         state,
         action: PayloadAction<{ findId: number; complited: string }>,
      ) => {
         let neadTodo = state.todos.find(
            todo => todo.id === action.payload.findId,
         );
         if (neadTodo) neadTodo.complited = action.payload.complited;
      },
      // setInitialTodo:(state, action: PayloadAction<ITodo[]>){
      //    state.todos = action.payload
      // }
      setInitialTodos: (state, action: PayloadAction<any[]>) => {
         state.todos = action.payload;
      },
   },
});

export const { addNewTodo, removeTodo, changeState, setInitialTodos } =
   todoSlice.actions;
export default todoSlice.reducer;
