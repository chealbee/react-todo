import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
   return (
      <div className="App">
         <>
            <div className="todo__content">
               <TodoForm />
               <Todos />
            </div>
         </>
      </div>
   );
}

export default App;
