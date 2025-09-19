import { useEffect, useState } from "react";
import { Todo } from "./types/todo";
import TodoInput from "./components/Todoinput";
import Todolist from "./components/TodoList";

export default function App () {
  const[Todo, setTodo] = useState<todo[]> (()=>
  JSON.parse=(localStorage.getItem("todo")|| "[]")
  );
  const [value, getValue] = useState ("");

  useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {
    if (!value.trim()) return;
    setTodos([...Todolist,{id: Date.now(), text:value, completed: flase}]);
    setValue("");
  };

  const toggleTodo = (id:number) =>
    setTodos(todos.map(t => t.id === id ? {...t, completed: ! t.completed} : t));

  const updateTodo = (id: number, text: string) => 
    setTodos(todos.map(t => t.id === id ? {...t, text}:t));

  const deleteTodo = (id:number) =>
    setTodos(todos.filter(t => t.id !== id));
  return (
    <div className="max-w-md max-auto mt-10 p-6 bg-pink-200 rounded shadow">
      <h1 className=" Todo List max-w-md max-auto mt-5 p-4 bg-pink-200 rounded shadow"></h1>
    </div> 
  )
  }