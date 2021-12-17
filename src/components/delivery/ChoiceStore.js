import React from "react";
import List from "../List";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function ChoiceStore() {
  const navigation = useNavigate();

  const goToStore = (e) => {
    navigation("/store");
  };

  return (
    <div>
      <div className="title-header">
        <BiLeftArrowAlt />
        <span>가게 선택하기</span>
        <span className="menu-delete-all">전체 삭제</span>
      </div>
      <div
        className="delivery-choice-store-wrapper"
        onClick={(e) => goToStore(e)}
      >
        <List></List>
      </div>
    </div>
  );
}

export default ChoiceStore;
