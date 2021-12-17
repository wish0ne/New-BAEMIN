import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiFillStar, AiOutlinePhone, AiOutlineHeart } from "react-icons/ai";
import { RiShareBoxLine } from "react-icons/ri";
import { IoBasket } from "react-icons/io5";
import "./Store.css";

function Store() {
  const navigation = useNavigate();

  const goToMenuDetail = () => {
    navigation("/menu-detail");
  };

  const goToOrder = () => {
    navigation("/shopping-basket");
  };

  return (
    <div className="Store">
      <div className="delivery-header">
        <BiLeftArrowAlt />
      </div>
      <div className="store-detail-wrapper">
        <div className="store-detail-header">
          <div className="store-name">타니예르베이커리</div>
          <div className="store-star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span className="store-star-text">5.0</span>
          </div>
          <div className="store-review">최근 리뷰 18 | 최근 사장님 댓글 0</div>
        </div>
        <div className="store-detail-footer">
          <div className="store-detail-icon">
            <AiOutlinePhone /> 전화
          </div>
          <div className="store-detail-icon">
            <AiOutlineHeart />찜
          </div>
          <div className="store-detail-icon">
            <RiShareBoxLine />
            공유
          </div>
        </div>
      </div>

      <div className="store-detail-text-wrapper">
        <div className="store-detail-text-row">
          <div className="store-detail-text-left">최소주문금액</div>
          <div className="store-detail-text-right">없음</div>
        </div>

        <div className="store-detail-text-row">
          <div className="store-detail-text-left">이용방법</div>
          <div className="store-detail-text-right">매장, 포장</div>
        </div>
        <div className="store-detail-text-row">
          <div className="store-detail-text-left">조리시간</div>
          <div className="store-detail-text-right">21분~31분 소요 예상</div>
        </div>
        <div className="store-detail-text-row">
          <div className="store-detail-text-left">위치 안내</div>
          <div className="store-detail-text-right">
            경기도 용인시 기흥구 서천동 245-12 (서천동)
            <br /> (배달주소로부터 약 81m)
          </div>
        </div>
        <div className="store-detail-text-row">
          <div className="store-detail-text-left">결제방법</div>
          <div className="store-detail-text-right">바로결제</div>
        </div>
      </div>

      <div className="gray-line"></div>
      <div className="store-toolbar">
        <div>메뉴</div>
        <div>정보</div>
        <div>리뷰</div>
      </div>

      <img
        src="/img/대표메뉴.jpg"
        alt="대표메뉴"
        onClick={goToMenuDetail}
        style={{
          width: "30rem",
          position: "relative",
          left: "calc(50% - 15rem)",
          cursor: "pointer",
        }}
      />

      <div className="group-basket-btn" onClick={goToOrder}>
        <IoBasket />
      </div>
    </div>
  );
}

export default Store;
