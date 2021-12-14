import React, { useState } from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="Menu">
        <Header />
        <Category />
    </div>
  );
};

export default Menu;
