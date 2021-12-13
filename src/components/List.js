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
          <span>기본순</span>
          <BiChevronDown className="icon" size={18} />
        </div>
        <div>
          <AiFillStar color="#F6E547" size={18} className="icon" />
          <span>별점</span>
          <BiChevronDown size={18} className="icon" />
        </div>
        <div>
          <AiOutlineControl size={18} className="icon" />
          <span>기타</span>
        </div>
        <div>
          <span>거리순</span>
        </div>
      </div>
      <div className="restaurantWrap">
        <div
          className="restaurant"
          onClick={() => {
            props.clickRes("이디야", 10, 292, 77, 0);
          }}
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
              <span>292m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div>
        <div
          className="restaurant"
          onClick={() => {
            props.clickRes("파리바게트", 10, 560, 120, 1);
          }}
        >
          <img alt="파리바게트" src="img/파리바게트.png" />
          <div className="text">
            <div className="title">
              <strong>파리바게뜨 수원경희대점</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>4.7</strong>
              <span>(100+)</span>
              <span className="menu">
                추억의 소시지빵, 후레쉬크림샌드빵 [Best]
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>7~27분</span>
              <IoLocationOutline size={14} />
              <span>560m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="아마스빈" src="img/아마스빈.png" />
          <div className="text">
            <div className="title">
              <strong>아마스빈 수원경희대점</strong>
              <div className="packaging">포장</div>
              <div className="packaging">매장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>4.9</strong>
              <span>(100+)</span>
              <span className="menu">초코 오레오 쉐이크, 딸기 요거트</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>6~16분</span>
              <IoLocationOutline size={14} />
              <span>81m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
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
              <span>756m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="배스킨라빈스" src="img/배스킨라빈스.png" />
          <div className="text">
            <div className="title">
              <strong>배스킨라빈스 수원경희대점</strong>
              <div className="packaging">포장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>4.9</strong>
              <span>(50+)</span>
              <span className="menu">패밀리, 쿼터</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>26~36분</span>
              <IoLocationOutline size={14} />
              <span>565m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
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
              <span>275m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div>
        <div className="restaurant">
          <img alt="포케올데이" src="img/포케올데이.png" />
          <div className="text">
            <div className="title">
              <strong>Poke all day 포케&샐러드 영통점</strong>
              <div className="packaging">신규</div>
              <div className="packaging">포장</div>
              <div className="packaging">매장</div>
            </div>
            <div className="starMenu">
              <AiFillStar color="#F6E547" />
              <strong>5.0</strong>
              <span>(100+)</span>
              <span className="menu">
                나홀로 하와이 셋트, 둘이서 하와이 셋트
              </span>
            </div>
            <div className="info">
              <AiOutlineClockCircle size={14} />
              <span>5~15분</span>
              <IoLocationOutline size={14} />
              <span>968m</span>
              <BiWalk size={14} />
              <span>도보 10분</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
