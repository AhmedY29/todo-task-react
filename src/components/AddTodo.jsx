import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddTodo(props) {
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleCloseDialog = () => {
    props.setOpen(false);
  };
  const handleAddChar = () => {
    if (formData.title.trim() == "") {
      toast.error("Please Filed Title Todo");
      return;
    }
    axios
      .post("https://6836b640664e72d28e41c577.mockapi.io/todos", formData)
      .then((res) =>
        toast.success(
          `Add Todo: ${formData.title} Successfully`,
          setFormData({
            title: "",
          }),
          handleCloseDialog()
        )
      );
  };
  return (
    <dialog
      open={props.open}
      className={` ${
        props.open ? "flex" : ""
      } justify-center items-center bg-black/50 w-full h-screen fixed top-0 `}
    >
      <div className="dialog-content bg-white p-3 px-5">
        <h1
          onClick={handleCloseDialog}
          className="text-3xl cursor-pointer border rounded-full w-fit px-2"
        >
          X
        </h1>
        <div className="form flex flex-col gap-5">
          <div className="input-group flex flex-col">
            <label htmlFor="char-name">To Do Title</label>
            <input
              type="text"
              id="char-name"
              placeholder="Enter Todo Title "
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleAddChar}
            className="bg-black p-2 px-4 rounded-2xl text-white cursor-pointer"
          >
            Add To do
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default AddTodo;
