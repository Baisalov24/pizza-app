import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CartdEmpty from "./components/pages/CardEmpty";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardEmpty" element={<CartdEmpty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
