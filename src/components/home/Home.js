import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDown, BsFillStarFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoBasket } from "react-icons/io5";
import SideMenu from "./SideMenu";

import "./Home.css";

function Home() {
  const navigation = useNavigate();
  let [hours, setHours] = useState();
  let [minutes, setMinutes] = useState();
  let [sideMenuRight, setSideMenuRight] = useState("-25rem");
  let [groupBasket, setGroupBasket] = useState(false);

  const goToDelivery = () => {
    navigation("/menu", { state: { delivery: true } });
  };
  const goToPackaging = () => {
    navigation("/menu");
  };

  const openSideMenu = () => {
    setSideMenuRight("0rem");
  };

  const closeSideMenu = () => {
    setSideMenuRight("-25rem");
  };

  const goToOrder = () => {
    alert("메뉴를 담아주세요!");
  };

  useEffect(() => {
    var now = new Date();
    setHours(now.getHours());
    setMinutes(now.getMinutes());
  });

  return (
    <div style={{ overflowX: "hidden" }} className="homeScreen">
      <SideMenu
        sideMenuRight={sideMenuRight}
        closeSideMenu={closeSideMenu}
        setGroupBasket={setGroupBasket}
      ></SideMenu>
      <div className="header fixed-header">
        <div className="address">
          용인시 기흥구 덕영대로 1732
          <BsChevronDown />
        </div>
        <div className="eat-together-icon" onClick={openSideMenu}>
          <div>함께</div>
          <div>먹기</div>
        </div>
      </div>
      <div className="header unfixed-header">
        <label htmlFor="search-menu" id="find-icon">
          <FaSearch />
        </label>

        <input
          className="search-input"
          type="text"
          id="search-menu"
          placeholder="찾는 메뉴가 뭐예요?"
        ></input>
      </div>
      <div className="menu-recommendation">
        <div className="recommendation-content-wrapper">
          <div className="recommendation-text-wrapper">
            <span className="small-font">
              {hours}시 {minutes}분엔
            </span>{" "}
            <br />
            미미카츠<span className="small-font">의</span> <br />
            치즈돈까스 <br />
            <span className="small-font">어때요</span>
          </div>
          <div className="recommendation-character"></div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="button-wrapper">
          <div className="delivery-btn" onClick={goToDelivery}>
            배달
            <div className="btn-img delivery-img" />
          </div>
          <div className="packaging-btn" onClick={goToPackaging}>
            포장
            <div className="btn-img packaging-img"></div>
          </div>
        </div>
        <div className="latest-delivery-wrapper">
          <div className="latest-delivery-text">최근에 주문했어요</div>
          <div className="latest-delivery-content-wrapper">
            <div className="latest-delivery-content">
              <div
                className="latest-delivery-img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDhfNDgg/MDAxNTU0NzMyMDEyMjQw.tNbsNAUXT4McEBq7AyI6sD-x_VtDRFEher6YDzi2-eog.0qAqOG757AX-JIA34VmoJDTL2mNyRC25nbUwSXf7dm8g.JPEG.gpqls7012/IMG_3524.JPG?type=w800" +
                    ")",
                }}
              ></div>
              <div className="latest-delivery-name">
                <div>청년다방의 떡볶이</div>
                <span className="store-star">
                  <BsFillStarFill size={15} />
                </span>
                4.8
              </div>
            </div>

            <div className="latest-delivery-content">
              <div
                className="latest-delivery-img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://www.mcdonalds.co.kr/upload/product/pcList/1583728339451.png" +
                    ")",
                }}
              ></div>
              <div className="latest-delivery-name">
                <div>맥도날드의 상하이버거</div>
                <span className="store-star">
                  <BsFillStarFill size={15} />
                </span>
                5.0
              </div>
            </div>

            <div className="latest-delivery-content">
              <div
                className="latest-delivery-img"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://src.hidoc.co.kr/image/lib/2020/6/17/1592363657269_0.jpg" +
                    ")",
                }}
              ></div>
              <div className="latest-delivery-name">
                <div>피자헛의 고구마피자</div>
                <span className="store-star">
                  <BsFillStarFill size={15} />
                </span>
                4.6
              </div>
            </div>
          </div>
        </div>
      </div>
      {groupBasket && (
        <div className="group-basket-btn" onClick={goToOrder}>
          <IoBasket />
        </div>
      )}
    </div>
  );
}

export default Home;
