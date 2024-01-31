"use client";

import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: number;
  text: string | undefined;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>();
  const [isTodoEditable, setIsTodoEditable] = useState<boolean>(false);

  console.log(todos);

  const addTodo = (): void => {
    if (newTodo?.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, text: any): void => {
    console.log(text, id);
    setIsTodoEditable((prev) => !prev);
  };


  return (
    <div>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="p-4 rounded-xl"
        />
        <button
          onClick={addTodo}
          className="p-4 bg-white text-black rounded-xl font-bold uppercase inline-flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            fill="black"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            editableTodo={isTodoEditable}
          />
        ))}
      </ul>
    </div>
  );
};
