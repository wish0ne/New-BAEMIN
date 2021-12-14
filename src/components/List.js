import React,{useState} from "react";
import {
  AiFillStar,
  AiOutlineControl,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BiChevronDown, BiWalk } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import "./List.css";

const Restaurant = (props)=>{
  const meter = [
    {name:"하우스크림", star:'5.0', review:'(100+)', menu:'하우스 크로플', time:'7~17분', meter:'861m', walk:'23분', source:'하우스크림'},
    {name:"타니예르베이커리", star:'5.0', review:'(50+)', menu:'바게트, 치아바타 앙버터', time:'7~17분', meter:'879m', walk:'24분', source:'타니예르베이커리'},
    {name:"반달커피 서천점", star:'5.0', review:'(100+)', menu:'아메리카노, 바닐라라떼', time:'13~23분', meter:'925m', walk:'24분', source:'반달커피'},
    {name:"메가엠지씨커피 용인 서천마을점", star:'4.8', review:'(30+)', menu:'(ICE)아메리카노, 춘천감자빵세트(HOT)', time:'8~18분', meter:'981m', walk:'27분', source:'메가커피'},
    {name:"배스킨라빈스 용인서천점", star:'4.9', review:'(100+)', menu:'패밀리, 쿼터', time:'26~36분', meter:'983m', walk:'28분', source:'배스킨라빈스'},
    {name:"파리바게뜨 용인 서천마을점", star:'4.9', review:'(20+)', menu:'추억의 소시지빵', time:'7~27분', meter:'983m', walk:'27분', source:'파리바게트'},
    {name:"이디야커피 용인서천점", star:'5.0', review:'(50+)', menu:'꿀호떡 세트, 복분자 뱅쇼 세트', time:'5~15분', meter:'985m', walk:'24분', source:'이디야'},
    {name:"푸오코", star:'5.0', review:'(20+)', menu:'차돌박이 샐럳, 촉촉닭가슴살 샐러드', time:'7~17분', meter:'991', walk:'27분', source:'푸오코'},
  ];

  const walk = [
    {name:"하우스크림", star:'5.0', review:'(100+)', menu:'하우스 크로플', time:'7~17분', meter:'861m', walk:'23분', source:'하우스크림'},
    {name:"타니예르베이커리", star:'5.0', review:'(50+)', menu:'바게트, 치아바타 앙버터', time:'7~17분', meter:'879m', walk:'24분', source:'타니예르베이커리'},
    {name:"반달커피 서천점", star:'5.0', review:'(100+)', menu:'아메리카노, 바닐라라떼', time:'13~23분', meter:'925m', walk:'24분', source:'반달커피'},
    {name:"이디야커피 용인서천점", star:'5.0', review:'(50+)', menu:'꿀호떡 세트, 복분자 뱅쇼 세트', time:'5~15분', meter:'985m', walk:'24분', source:'이디야'},
    {name:"메가엠지씨커피 용인 서천마을점", star:'4.8', review:'(30+)', menu:'(ICE)아메리카노, 춘천감자빵세트(HOT)', time:'8~18분', meter:'981m', walk:'27분', source:'메가커피'},
    {name:"배스킨라빈스 용인서천점", star:'4.9', review:'(100+)', menu:'패밀리, 쿼터', time:'26~36분', meter:'983m', walk:'28분', source:'배스킨라빈스'}, 
    {name:"푸오코", star:'5.0', review:'(20+)', menu:'차돌박이 샐럳, 촉촉닭가슴살 샐러드', time:'7~17분', meter:'991', walk:'27분', source:'푸오코'},
    {name:"파리바게뜨 용인 서천마을점", star:'4.9', review:'(20+)', menu:'추억의 소시지빵', time:'7~27분', meter:'983m', walk:'27분', source:'파리바게트'},
  ];

  console.log(props.isMeterOrder);
  const orderArr = props.isMeterOrder?meter:walk;

  const restList = orderArr.map(m=>{
    const source = `img/${m.source}.png`
    return(
  <div className="restaurant">
    <img alt={m.name} src={source}/>
    <div className="text">
      <div className="title">
        <strong>{m.name}</strong>
        <div className="packaging">포장</div>
        <div className="packaging">매장</div>
      </div>
      <div className="starMenu">
        <AiFillStar color="#F6E547" />
        <strong>{m.star}</strong>
        <span>{m.review}</span>
        <span className="menu">
          {m.menu}
        </span>
      </div>
      <div className="info">
        <AiOutlineClockCircle size={14} />
        <span>{m.time}</span>
        <IoLocationOutline size={14} />
        <span>{m.meter}</span>
        <BiWalk size={14} />
        <span>{m.walk}</span>
      </div>
    </div>
  </div>
  )});
  console.log(restList);

  return (<div className="restaurantWrap">{restList}</div>);
}

const List = (props) => {
  const [isMeterOrder, setIsMeterOrder] = useState(true);
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
          <div className="filter selected" onClick={()=>{setIsMeterOrder(true)}}>
          <span>거리순(m)</span>
        </div>
        </div>
        <div>
          <div className="filter" onClick={()=>{setIsMeterOrder(false)}}>
          <span>도보시간순(분)</span>
        </div>
        </div>
      </div>
      <Restaurant isMeterOrder={isMeterOrder}/>
      {/* <div className="restaurantWrap">
        <Restaurant/>
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
      </div> */}
    </div>
  );
};

export default List;
