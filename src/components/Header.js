import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="addressContent">
        <div className="address">경기 용인시 기흥구 덕영대로 1732</div>
        <MdKeyboardArrowDown size={46} color="white" className="icon" />
      </div>
      <input className="textInput" type="text" />
    </div>
  );
};

export default Header;
