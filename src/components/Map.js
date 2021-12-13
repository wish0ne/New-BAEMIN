/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Map.css";
import { BiChevronRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

//내좌표
//o.LatLng {y: 37.239574, _lat: 37.239574, x: 127.0837813, _lng: 127.0837813}

// const DefaultMap = () => {
//   return (
//     <div className="DefaultMap">
//       <div className="strong">가게를</div>
//       <div className="strong">클릭 하세요</div>
//       <div className="light">선택한 가게가 지도에 나타나요</div>
//       <img src="img/배달이.png" alt="배달이" className="images" />
//     </div>
//   );
// };

const Panel = (props) => {
  return (
    <div className="Panel">
      <div className="info">
        <span className="walk">도보</span>
        <div className="bigInfo">
          <span className="minute">{props.selected.minute}분</span>
          <span className="meter">{props.selected.meter}m</span>
        </div>
        <span className="kcal">{props.selected.kcal}kcal</span>
      </div>
      <div className="order">
        <span>주문하러가기</span>
        <BiChevronRight size={40} />
      </div>
    </div>
  );
};

const NaverMap = (props) => {
  var map;

  const container = useRef(null);
  const mapOptions = {
    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
    zoomControl: true,
    zoomControlOptions: {
      style: window.naver.maps.ZoomControlStyle.SMALL,
      position: window.naver.maps.Position.RIGHT_CENTER,
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: window.naver.maps.MapTypeControlStyle.BUTTON,
      position: window.naver.maps.Position.TOP_RIGHT,
    },

    zoom: 13,
  };

  useEffect(() => {
    map = new window.naver.maps.Map(container.current, mapOptions);
    window.naver.maps.Event.addListener(map, "click", function (e) {
      console.log(e.coord);
    });
  });

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      map.setCenter(new window.naver.maps.LatLng(37.239574, 127.0837813));
      map.setZoom(14);
      // var marker = new window.naver.maps.Marker({
      //   position: new window.naver.maps.LatLng(
      //     props.markers[props.selected.index].y,
      //     props.markers[props.selected.index].x
      //   ),
      //   map: map,
      //   title: props.selected.name,
      //   icon: {
      //     content: [
      //       '<div style="background:#2ac1bc; width:150px; height:50px; border-radius:10px;position:relative; color:white; text-align:center; line-height:50px">',
      //       "이디야커피 용인서천점",
      //       '<div style="position:absolute; width:0px; height:0px; border-top:15px solid #2ac1bc; border-left:15px solid transparent; border-right: 15px solid transparent; bottom:-15px; left:60px;">',
      //       "</div>",
      //       "</div>",
      //     ].join(""),
      //     //size: new window.naver.maps.Size(38, 58),
      //     anchor: new window.naver.maps.Point(75, 65),
      //   },
      // });
      var contentString = [
        '<div style="display:flex; flex-direction:column">',
        '<div style="display:flex">',
        '<img src="img/아마스빈.png" style="height:50px; width:50px;"/>',
        '<img src="img/아마스빈.png" style="height:50px; width:50px;"/>',
        '<img src="img/아마스빈.png" style="height:50px; width:50px;"/>',
        "</div>",
        "<h1 style='font-size:18px; color:#437bfe; font-weight:bold'>아마스빈 경희대점</h1>",
        "<div style='display:flex; font-size:15px; justify-content:space-around'><span>별점</span><span>최근주문</span><span>찜</span></div>",

        "</div>",
      ].join("");
      var infowindow = new window.naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
        backgroundColor: "#2ac1bc",
        borderColor: "transparent",
        anchorSize: new window.naver.maps.Size(15, 10),
        //anchorSkew: true,
        anchorColor: "#2ac1bc",

        pixelOffset: new window.naver.maps.Point(5, -5),
      });

      var marker = new window.naver.maps.Marker({
        map: map,
        position: new window.naver.maps.LatLng(
          props.markers[props.selected.index].y,
          props.markers[props.selected.index].x
        ),
        icon: {
          content: "<div></div>",
        },
      });

      infowindow.open(map, marker);

      var myLocMarker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.239574, 127.0837813),
        map: map,
        title: "내위치",
      });

      var polyline = new window.naver.maps.Polyline({
        map: map,
        path: [
          new window.naver.maps.LatLng(37.239574, 127.0837813),
          new window.naver.maps.LatLng(
            props.markers[props.selected.index].y,
            props.markers[props.selected.index].x
          ),
        ],
        endIcon: window.naver.maps.PointingIcon.OPEN_ARROW,
        endIconSize: 20,
        startIcon: window.naver.maps.PointingIcon.CIRCLE,
        startIconSize: 20,
        strokeColor: "#2ac1bc",
        strokeWeight: 5,
      });
    }
  }, [props.selected]);

  const isInitialMount2 = useRef(true);
  useEffect(() => {
    if (isInitialMount2.current) {
      isInitialMount2.current = false;
    } else {
      console.log("markers", props.markers);
      // Your useEffect code here to be run on update
      props.markers.forEach((rest, index) => {
        var marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(rest.y, rest.x),
          map: map,
          title: "식당",
          icon: {
            content:
              '<div style="background:#2ac1bc; width:40px; height:40px; border-radius:10px; border:1px solid #ececec">' +
              '<img src="img/' +
              props.markers[index].name +
              '.png" style="width:40px; height:40px border-radius:10px;" />' +
              "</div>",
            //size: new window.naver.maps.Size(38, 58),
            anchor: new window.naver.maps.Point(75, 65),
          },
        });
        if (rest.name === "아마스빈") {
          map.setCenter(
            new window.naver.maps.LatLng(
              props.markers[index].y,
              props.markers[index].x
            )
          );
        }
      });

      // map.setCenter(
      //   new window.naver.maps.LatLng(props.markers[0].y, props.markers[0].x)
      // );
      map.setZoom(15);
    }
  }, [props.markers]);

  return (
    <Fragment>
      <div id="map" ref={container} style={{ width: "100%" }}></div>
    </Fragment>
  );
};

const Map = (props) => {
  const [curtLocation, setCurtLocation] = useState("");
  const [markers, setMarkers] = useState([]);

  const restLoc = [
    "서천동 833",
    "영통동 1024-10",
    "영통동 998-9",
    "영통동 1024-7",
    "서천동 813",
    "영통동 1024-1",
    "영통동 1030-6",
  ]; //이디야, 파리바게트, 투썸, 아마스빈, 메가커피, 배라, 포케
  const restName = [
    "이디야",
    "파리바게트",
    "투썸플레이스",
    "아마스빈",
    "메가커피",
    "배스킨라빈스",
    "포케올데이",
  ];

  //주소로 좌표 검색
  const searchAddress = () => {
    const tempArr = [];
    restLoc.forEach((rest, index) => {
      window.naver.maps.Service.geocode(
        {
          query: rest,
        },
        function (status, response) {
          if (status !== window.naver.maps.Service.Status.OK) {
            return alert("Please check address");
          }
          var result = response.v2.addresses[0];
          //tempArr.push({ x: result.x, y: result.y });
          setMarkers((prev) => [
            ...prev,
            { x: result.x, y: result.y, name: restName[index] },
          ]);
          //tempArr.push({ x: result.x, y: result.y });
        }
      );
    });
    return tempArr;
  };

  const onSuccessGeolocation = (position) => {
    //현재 위치
    setCurtLocation(
      new window.naver.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      )
    );
  };

  const onErrorGeolocation = () => {
    console.log("현재 위치를 가져오는데 에러가 발생했습니다.");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation
      );
    } else {
      console.log("Geolocation Not supported Required");
    }
    searchAddress();
  }, []);

  return (
    <div className="Map">
      <NaverMap
        curtLocation={curtLocation}
        markers={markers}
        selected={props.selected}
        name={restName}
      />
      {props.selected.name !== "" && <Panel selected={props.selected} />}
    </div>
  );
};

export default Map;
