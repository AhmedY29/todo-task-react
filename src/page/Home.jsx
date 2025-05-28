import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";

export const getTodos = async () => {
  let apiUrl = "https://6836b640664e72d28e41c577.mockapi.io/todos";
  let res = await axios.get(apiUrl);
  let data = await res.data;

  return data;
};

function Home() {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const data = async () => {
      let todo = await getTodos();
      setToDos(todo);
    };
    data();
  }, [openAddDialog]);

  console.log(toDos);

  return (
    <div className="flex flex-col justify-center w-full">
      <Navbar openAdd={setOpenAddDialog} />
      <TodoItem todos={toDos} setToDos={setToDos} />
      <AddTodo open={openAddDialog} setOpen={setOpenAddDialog} />
    </div>
  );
}

export default Home;
