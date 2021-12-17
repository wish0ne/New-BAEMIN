import React, { useState } from "react";
import CharacterPopup from "./CharacterPopup";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { IoBasket } from "react-icons/io5";
import "./Delivery.css";
import "./Store.css";
import "../home/SideMenu.css";

function MenuDetail() {
  const navigation = useNavigate();
  let [showCharacterPopup, setShowCharacterPopUp] = useState(false);

  const goToStore = () => {
    alert("메뉴가 장바구니에 담겼습니다!");
    navigation("/store");
  };

  const goToOrder = () => {
    navigation("/shopping-basket");
  };

  const openCharacterPopup = () => {
    setShowCharacterPopUp(true);
  };

  return (
    <div>
      <div
        className="delivery-header menu-img"
        sytle={{
          //   width: "100%",
          zIndex: "2",
        }}
      >
        <BiLeftArrowAlt />
      </div>
      <div
        className="store-detail-wrapper"
        style={{
          height: "8rem",
          zIndex: "1",
          position: "relative",
          top: "-4rem",
          backgroundColor: "white",
          paddingBottom: "50px",
        }}
      >
        <div className="store-detail-header">
          <div className="store-name">하우스 크로플</div>
          <div className="store-menu-detail-text">
            요즘 핫! 하다는 크로와상 + 와플 바삭바삭한 크로와상의 식감과
            쫄깃하고 촉촉한 와플의 식감을 함께 즐겨보세요.
          </div>
        </div>
      </div>

      <div className="menu-content-wrapper">
        <div className="menu-detail-row">
          <div className="menu-detail-title">가격</div>
          <div className="menu-detail-title">5,500원</div>
        </div>
      </div>
      <div className="gray-line"></div>
      <div className="menu-content-wrapper">
        <div className="menu-detail-row menu-detail-column">
          <div className="menu-detail-title">토핑추가</div>
          <div className="menu-option">
            <input type="checkbox" id="option01"></input>
            <label
              htmlFor="option01"
              style={{ left: "-1.9rem", top: "0.25rem" }}
            >
              <BsCheckLg />
            </label>
            <div>생크림 추가</div>
            <div>1,000원</div>
          </div>

          <div className="menu-option">
            <input type="checkbox" id="option02"></input>
            <label
              htmlFor="option02"
              style={{ left: "-1.9rem", top: "0.25rem" }}
            >
              <BsCheckLg />
            </label>
            <div>앙버터 추가</div>
            <div>1,000원</div>
          </div>

          <div className="menu-option">
            <input type="checkbox" id="option03"></input>
            <label
              htmlFor="option03"
              style={{ left: "-1.9rem", top: "0.25rem" }}
            >
              <BsCheckLg />
            </label>
            <div>누텔라 추가</div>
            <div>1,500원</div>
          </div>
        </div>
      </div>
      <div className="gray-line"></div>
      <div className="menu-content-wrapper">
        <div className="menu-detail-row">
          <div className="menu-detail-title">수량</div>
          <div className="menu-detail-title">1</div>
        </div>
      </div>
      <div className="group-basket-btn" onClick={goToOrder}>
        <IoBasket />
      </div>
      {!showCharacterPopup && (
        <button
          type="button"
          id="group-delivery-btn"
          onClick={openCharacterPopup}
        >
          1개 담기
        </button>
      )}
      <CharacterPopup showCharacterPopup={showCharacterPopup}></CharacterPopup>
      {showCharacterPopup && (
        <button type="button" id="group-delivery-btn" onClick={goToStore}>
          장바구니에 담기
        </button>
      )}
    </div>
  );
}

export default MenuDetail;
