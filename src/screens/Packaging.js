import React, { useState } from "react";
import Map from "../components/Map";
import List from "../components/List";
import "./Packaging.css";

const Packaging = () => {
  const [selected, setSelected] = useState({
    name: "",
    minute: 0,
    meter: 0,
    kcal: 0,
    index: 0,
  });

  const clickRes = (name, minute, meter, kcal, index) => {
    setSelected({
      name: name,
      minute: minute,
      meter: meter,
      kcal: kcal,
      index: index,
    });
  };
  return (
    <div className="PackagingWrap">
      <List clickRes={clickRes} />
      <Map selected={selected} />
    </div>
  );
};

export default Packaging;
