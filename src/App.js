import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./components/Category";
import List from "./components/List";
import Map from "./components/Map";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Category />
          </>
        }
      />
      <Route
        path="/packaging"
        element={
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
            }}
          >
            <List />
            <Map />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
