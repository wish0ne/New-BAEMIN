import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./screens/Menu";
import Packaging from "./screens/Packaging";
import Home from "./components/home/Home";
import ShoppingBasket from "./components/delivery/ShoppingBasket";
import Order from "./components/delivery/Order";
import Pay from "./components/delivery/Pay";
import OrderComplete from "./components/delivery/OrderComplete";
import Store from "./components/delivery/Store";
import MenuDetail from "./components/delivery/MenuDetail";
import ChoiceStore from "./components/delivery/ChoiceStore";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route exact path="/shopping-basket" element={<ShoppingBasket />} />
      <Route exact path="/order" element={<Order />} />
      <Route exact path="/pay" element={<Pay />} />
      <Route exact path="/order-complete" element={<OrderComplete />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/choice-store" element={<ChoiceStore />} />
      <Route exact path="/menu-detail" element={<MenuDetail />} />
      <Route path="/menu/packaging" element={<Packaging />} />
    </Routes>
  );
}

export default App;
