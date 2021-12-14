import React from "react";
import {
  AiFillStar,
  AiOutlineControl,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BiChevronDown, BiWalk } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import "./List.css";

const List = (props) => {
  return (
    <div className="List">
      <div className="categoryWrap">
        <span className="click">카페디저트</span>
        <span>분식</span>
        <span>패스트푸드</span>
        <span>한식</span>
        <span>치킨</span>
        <span>돈까스회일식</span>
        <span>피자</span>
        <span>족발보쌈</span>
        <span>아시안양식</span>
        <span>야식</span>
        <span>도시락</span>
        <span>중국집</span>
        <span>찜탕</span>
        <span>맛집랭킹</span>
      </div>
      <div className="filterWrap">
        <div>
          <div className="filter">
          <span>기본순</span>
          <BiChevronDown className="icon" size={18} />
          </div>
        </div>
        <div>
          <div className="filter">
          <AiFillStar color="#F6E547" size={18} className="icon" />
          <span>별점</span>
          <BiChevronDown size={18} className="icon" />
          </div>
        </div>
        <div>
          <div className="filter">
          <AiOutlineControl size={18} className="icon" />
          <span>기타</span>
          </div>
        </div>
        <div>
          <div className="filter selected" >
          <span>거리순(m)</span>
        </div>
        </div>
        <div>
          <div className="filter">
          <span>도보시간순(분)</span>
        </div>
        </div>
      </div>
      <div className="restaurantWrap">
      {/* <div className="restaurant"   onClick={() => {
            props.clickRes("투썸플레이스", 18, 1.2, 55); //도보, 미터, 칼로리, 인덱스
          }}>
          <img alt="투썸플레이스" src="img/투썸플레이스.png" />
          <div className="text">
            <div className="title">
              <strong>투썸플레이스 경희대국제캠퍼스점</strong>
              <div className="packaging">신규</div>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(10+)</span>
              <span className="menu">
                시그니처뱅쇼(L), 스트로베리초콜릿프라페(L)
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>21~31분</span>
              <IoLocationOutline size={14} />
              <span>528m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div> */}
        <div className="restaurant" onClick={() => {
            props.clickRes("하우스크림", 23, 861, 2); //도보, 미터, 칼로리
          }}>
          <img alt="하우스크림" src="img/하우스크림.png" />
          <div className="text">
            <div className="title">
              <strong>하우스크림</strong>
              <div className="packaging">포장</div>
              <div className="packaging">매장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(100+)</span>
              <span className="menu">
                하우스 크로플
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>7~17분</span>
              <IoLocationOutline size={14} />
              <span>861m</span>
              <BiWalk size={14} />
              <span>23분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="타니예르베이커리" src="img/타니예르베이커리.png" />
          <div className="text">
            <div className="title">
              <strong>타니예르베이커리</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(50+)</span>
              <span className="menu">
                바게트, 치아바타 앙버터
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>7~17분</span>
              <IoLocationOutline size={14} />
              <span>879m</span>
              <BiWalk size={14} />
              <span>24분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="반달커피" src="img/반달커피.png" />
          <div className="text">
            <div className="title">
              <strong>반달커피 서천점</strong>
              <div className="packaging">쿠폰</div>
              <div className="packaging">포장</div>
              <div className="packaging">매장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(100+)</span>
              <span className="menu">아메리카노, 바닐라라떼</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>13~23분</span>
              <IoLocationOutline size={14} />
              <span>925m</span>
              <BiWalk size={14} />
              <span>24분</span>
            </div>
          </div>
        </div>
      <div className="restaurant">
          <img alt="메가커피" src="img/메가커피.png" />
          <div className="text">
            <div className="title">
              <strong>메가엠지씨커피 용인 서천마을점</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>4.8</strong>
              <span>(30+)</span>
              <span className="menu">(ICE)아메리카노, 춘천감자빵세트(HOT)</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>8~18분</span>
              <IoLocationOutline size={14} />
              <span>981m</span>
              <BiWalk size={14} />
              <span>27분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="배스킨라빈스" src="img/배스킨라빈스.png" />
          <div className="text">
            <div className="title">
              <strong>배스킨라빈스 용인서천점</strong>
              <div className="packaging">포장</div>
              <div className="packaging">매장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>4.9</strong>
              <span>(100+)</span>
              <span className="menu">패밀리, 쿼터</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>26~36분</span>
              <IoLocationOutline size={14} />
              <span>983m</span>
              <BiWalk size={14} />
              <span>28분</span>
            </div>
          </div>
        </div>
        <div
          className="restaurant"
        >
          <img alt="파리바게트" src="img/파리바게트.png" />
          <div className="text">
            <div className="title">
              <strong>파리바게뜨 용인서천마을점</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>4.9</strong>
              <span>(20+)</span>
              <span className="menu">
                추억의 소시지빵
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>7~27분</span>
              <IoLocationOutline size={14} />
              <span>983m</span>
              <BiWalk size={14} />
              <span>27분</span>
            </div>
          </div>
        </div>
        <div
          className="restaurant"
        >
          <img alt="이디야" src="img/이디야.png" />
          <div className="text">
            <div className="title">
              <strong>이디야커피 용인서천점</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(50+)</span>
              <span className="menu">꿀호떡 세트, 복분자 뱅쇼 세트</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>5~15분</span>
              <IoLocationOutline size={14} />
              <span>985m</span>
              <BiWalk size={14} />
              <span>24분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="푸오코" src="img/푸오코.png" />
          <div className="text">
            <div className="title">
              <strong>푸오코</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(20+)</span>
              <span className="menu">
                차돌박이 샐러드, 촉촉닭가슴살 샐러드
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>7~17분</span>
              <IoLocationOutline size={14} />
              <span>991m</span>
              <BiWalk size={14} />
              <span>27분</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
