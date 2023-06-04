import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail"
import { Route, Routes } from "react-router";
import './App.css';

const App = () => {
  return (
  
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
     </Routes>
    </>
  );
};

export default App;
