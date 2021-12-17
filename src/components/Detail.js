import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiLeftArrowAlt, BiChevronDown } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { RiShareBoxLine } from "react-icons/ri";
import "./Detail.css";

const Detail = (props) => {
  return (
    <div className="Detail">
      <div className="padding">
        <BiLeftArrowAlt
          size={35}
          className="backIcon"
          onClick={() => {
            props.goBack();
          }}
        />
        <div className="titleWrap">
          <h1>하우스크림</h1>
          <div className="starWrap">
            <AiFillStar color="#F6E547" size={25} />
            <AiFillStar color="#F6E547" size={25} />
            <AiFillStar color="#F6E547" size={25} />
            <AiFillStar color="#F6E547" size={25} />
            <AiFillStar color="#F6E547" size={25} />
            <span>5.0</span>
          </div>
          <div className="recentWrap">
            <span className="recentReview">최근 리뷰 236</span>
            <span className="recentChat">최근 사장님 댓글 236</span>
          </div>
          <div className="iconWrap">
            <span className="subWrap">
              <BsTelephone className="icon" />
              전화
            </span>
            <span className="subWrap">
              <AiOutlineHeart className="icon" />찜 663
            </span>
            <span className="subWrap">
              <RiShareBoxLine className="icon" />
              공유
            </span>
          </div>
        </div>
      </div>
      <div className="orderTypeWrap">
        <span>배달주문</span>
        <span className="selectedType">포장/방문주문</span>
      </div>
      <div className="detailWrap">
        <div className="subWrap">
          <span className="title">최소주문금액</span>
          <span>없음</span>
        </div>
        <div className="subWrap">
          <span className="title">이용방법</span>
          <span>매장, 포장</span>
        </div>
        <div className="subWrap">
          <span className="title">위치안내</span>
          <span>경기도 용인시 기흥구 서천동 729-10 1층(서천동)</span>
        </div>
      </div>
      <div className="bar">&nbsp;</div>
      <div className="menuWrap">
        <span className="selected">메뉴</span>
        <span className="notSelected">정보</span>
        <span className="notSelected">리뷰</span>
      </div>
      <div className="textWrap">
        <div>
          용인와이파이 사용시 5% 자동 할인 결제됩니다!
          <br />
          용인시 재난지원금 사용가능!
          <br />
          <br />
          &lt;&lt;리뷰이벤트&gt;&gt; <br />첫 주문 or 재주문이신 고객님들
          주문전에···
        </div>
      </div>
      <div className="downIcon">
        <BiChevronDown size={25} color="gray" />
      </div>
      <div className="menu">
        <img src="/img/대표메뉴.jpg" alt="대표메뉴" />
      </div>
    </div>
  );
};

export default Detail;
