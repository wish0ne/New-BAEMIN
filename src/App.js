import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./screens/Menu";
import Packaging from "./screens/Packaging";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Menu/>
        }
      />
      <Route
        path="/packaging"
        element={
          <Packaging />
        }
      />
    </Routes>
  );
}

export default App;
