import React from "react";
import "./CharacterPopup.css";

function CharacterPopup(props) {
  return (
    <div
      className="character-popup-wrapper"
      style={{ display: !props.showCharacterPopup && "none" }}
    >
      <div className="character-popup-header">누구의 메뉴인가요?</div>
      <div className="character-popup-content">
        <div className="character-wrapper">
          <input type="radio" id="character01" name="chosen"></input>
          <label htmlFor="character01">
            <div className="friends-profile-img"></div>
            <div className="friends-profile-name" style={{ marginLeft: "0px" }}>
              공통
            </div>
          </label>
          <div className="character-img"></div>
        </div>

        <div className="character-wrapper">
          <input type="radio" id="character02" name="chosen"></input>
          <label htmlFor="character02">
            <div
              className="friends-profile-img"
              style={{
                backgroundImage:
                  "url('https://blog.kakaocdn.net/dn/ekWihO/btqC1HX0H3J/LHzRdNeglmSgcv937zbql1/img.jpg')",
              }}
            ></div>
            <div className="friends-profile-name" style={{ marginLeft: "0px" }}>
              나
            </div>
          </label>
          <div className="character-img"></div>
        </div>

        <div className="character-wrapper">
          <input type="radio" id="character03" name="chosen"></input>
          <label htmlFor="character03">
            <div
              className="friends-profile-img"
              style={{
                backgroundImage:
                  "url('http://www.queen.co.kr/news/photo/201903/309777_48741_1811.jpg')",
              }}
            ></div>
            <div className="friends-profile-name" style={{ marginLeft: "0px" }}>
              박민영
            </div>
          </label>
          <div className="character-img"></div>
        </div>

        <div className="character-wrapper">
          <input type="radio" id="character04" name="chosen"></input>
          <label htmlFor="character04">
            <div
              className="friends-profile-img"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg')",
              }}
            ></div>
            <div className="friends-profile-name" style={{ marginLeft: "0px" }}>
              서강준
            </div>
          </label>
          <div className="character-img"></div>
        </div>
      </div>
    </div>
  );
}

export default CharacterPopup;
