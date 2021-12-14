import React from "react";
import {
  AiFillStar,
  AiOutlineControl,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {BiLeftArrowAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import "./Detail.css";

const Detail = (props) => {
  return (
    <div className="Detail">
        <BiLeftArrowAlt size={35}/>
        <div className="titleWrap">
            <h1>하우스크림</h1>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <span>5.0</span>
            <span>최근 리뷰 236</span>
            <span>최근 사장님 댓글 236</span>
        </div>

    </div>
  );
};

export default Detail;
