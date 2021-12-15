import React, { useState } from "react";
import Map from "../components/Map";
import List from "../components/List";
import Detail from "../components/Detail";
import "./Packaging.css";

const Packaging = () => {
  const [selected, setSelected] = useState({
    name: "",
    minute: 0,
    meter: 0,
    kcal: 0,
  });

  const clickRes = (name, minute, meter, kcal) => {
    setSelected({
      name: name,
      minute: minute,
      meter: meter,
      kcal: kcal,
    });
  };

  const clickMenu = () => {
    setIsMenu(true);
  };

  const goBack = () => {
    setIsMenu(false);
  };

  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="PackagingWrap">
      {!isMenu ? (
        <List clickRes={clickRes} clickMenu={clickMenu} />
      ) : (
        <Detail goBack={goBack} />
      )}
      <Map selected={selected} />
    </div>
  );
};

export default Packaging;
