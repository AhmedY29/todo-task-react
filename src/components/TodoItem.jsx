import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTodos } from "../page/Home";

function TodoItem(props) {
  const [search, setSearch] = useState("");

  const handleDeleteTodo = (id) => {
    axios
      .delete(`https://6836b640664e72d28e41c577.mockapi.io/todos/${id}`)
      .then(async () => {
        let todos = await getTodos();
        let filter = todos.filter((todo) => todo.id != id);
        props.setToDos(filter);
      });
  };

  useEffect(() => {
    axios
      .get(`https://6836b640664e72d28e41c577.mockapi.io/todos?title=${search}`)
      .then((res) => props.setToDos(res.data))
      .catch((err) => props.setToDos([]));
  }, [search]);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="my-10 w-[80%]">
        <div className="search w-[50%] my-10">
          <input
            className="w-full p-3 rounded-xl"
            type="text"
            placeholder="Search Todos"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <h1 className="text-3xl">Todos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
          {props.todos.length > 0
            ? props.todos.map((todo) => (
                <div className="bg-gray-50">
                  <h1>{todo.title}</h1>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="bg-red-400 text-white p-1 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              ))
            : "Not Found"}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
