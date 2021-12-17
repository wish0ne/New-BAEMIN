import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import ShoppingBasket from './components/delivery/ShoppingBasket';
import Order from './components/delivery/Order';
import Pay from './components/delivery/Pay';
import OrderComplete from './components/delivery/OrderComplete';
import Store from './components/delivery/Store';
import MenuDetail from './components/delivery/MenuDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/shopping-basket" element={<ShoppingBasket/>} />
          <Route exact path="/order" element={<Order/>} />
          <Route exact path="/pay" element={<Pay/>} />
          <Route exact path="/order-complete" element={<OrderComplete/>} />
          <Route exact path="/store" element={<Store/>} />
          <Route exact path="/menu-detail" element={<MenuDetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
