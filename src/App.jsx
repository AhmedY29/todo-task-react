import { useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Home />
      <Toaster />
    </>
  );
}

export default App;
