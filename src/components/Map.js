/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Map.css";
import { BiChevronRight } from "react-icons/bi";

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
          <span className="meter">{props.selected.meter}km</span>
        </div>
        <span className="kcal">횡단보도 {props.selected.kcal}회</span>
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
      map.setZoom(17);
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
        '<div style="display:flex; flex-direction:column; width:270px;">',
        '<div style="display:flex">',
        '<img src="img/하우스크림.png" style="height:90px;"/>',
        '<img src="img/하우스크림2.jfif" style="width:90px; height:90px"/>',
        '<img src="img/하우스크림1.jfif" style="width:90px; height:90px"/>',
        "</div>",
        "<div style='padding:0 10px 10px;'><h1 style='font-size:16px; color:#0042ED; font-weight:bold; flex-wrap:wrap;'>하우스크림</h1>",
        "<div style='display:flex; font-size:13px; justify-content:space-around;'><div style='display:flex; align-items:center'><img src='img/star.png' style='width:13px; height:13px; margin-right:5px;'/><span>5.0</span></div><div style='display:flex; align-items:center''><img src='img/phone.png' style='width:15px; height:15px; margin-right:5px'/><span>최근주문수 (100+)</span></div><div style='display:flex; align-items:center'><img src='img/heart.png' style='width:15px; height:15px; margin-right:5px'/><span>찜 660</span></div></div></div>",
        "</div>",
      ].join("");
      var infowindow = new window.naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
        backgroundColor: "white",
        borderColor:'#E4E4E4',
        anchorSize: new window.naver.maps.Size(20, 5),
        //anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new window.naver.maps.Point(5, -10),
      });

      var index =0;
      for(let i=0; i<8; i++){
        if(props.markers[i].name===props.selected.name){
          index = i;
          break;
        }
      }
      var dest = new window.naver.maps.Marker({
        map: map,
        position: new window.naver.maps.LatLng(
          props.markers[index].y,
          props.markers[index].x
        ),
        // icon: {
        //   content: "<div></div>",
        // },
      });

      window.naver.maps.Event.addListener(dest, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, dest);
        }
    });

      infowindow.open(map, dest);

      var myLocMarker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.239574, 127.0837813),
        map: map,
        title: "내위치",
      });

      var polyline = new window.naver.maps.Polyline({
        map: map,
        path: [
          new window.naver.maps.LatLng(37.239574, 127.0837813), //내위치
          new window.naver.maps.LatLng(37.2399322, 127.0837786),
          new window.naver.maps.LatLng(37.2399552, 127.0829295),
          new window.naver.maps.LatLng(37.2400107,127.0820231),
          new window.naver.maps.LatLng(37.2402723, 127.0821224),
          new window.naver.maps.LatLng(37.2403075,127.0803279),
          new window.naver.maps.LatLng(37.2402765, 127.080171),
          new window.naver.maps.LatLng(37.2402701, 127.0796064),
          new window.naver.maps.LatLng(37.240474, 127.0791558),
          new window.naver.maps.LatLng(37.2405723, 127.0790774),
          new window.naver.maps.LatLng(37.2412406, 127.0790861),
          new window.naver.maps.LatLng(37.2411563, 127.0788085),
          new window.naver.maps.LatLng(37.2412011, 127.078502),
          new window.naver.maps.LatLng(37.2413623, 127.0781004),
          new window.naver.maps.LatLng(37.2414435,127.0780078),
          new window.naver.maps.LatLng(37.2414974, 127.077935),
          new window.naver.maps.LatLng(37.2415636,127.077747 ),
          new window.naver.maps.LatLng(37.2415908, 127.0775887),
          new window.naver.maps.LatLng(37.241618, 127.0772595),
          new window.naver.maps.LatLng(37.2416223, 127.0770597),
          new window.naver.maps.LatLng(37.241705, 127.0764374),
          new window.naver.maps.LatLng(37.2417878, 127.0762906),
          new window.naver.maps.LatLng(37.2417883, 127.0762852),
          new window.naver.maps.LatLng(37.2419394, 127.0761652),


          new window.naver.maps.LatLng(37.2420013, 127.0759848),
          new window.naver.maps.LatLng(37.2420243, 127.0758963),
          new window.naver.maps.LatLng(37.2419405, 127.0758688),
          new window.naver.maps.LatLng(37.2419607, 127.0755161),
          new window.naver.maps.LatLng(37.2410538, 127.0753484),
          new window.naver.maps.LatLng(37.2406625, 127.0751386),
          new window.naver.maps.LatLng(37.240805, 127.0748301),
          new window.naver.maps.LatLng(37.2404799, 127.0746403),
          new window.naver.maps.LatLng(37.2405034, 127.0745719),
          new window.naver.maps.LatLng(37.2404874, 127.0745176),
          new window.naver.maps.LatLng(37.2406918, 127.0739329),
          //가게 위치
          new window.naver.maps.LatLng(
            props.markers[index].y,
            props.markers[index].x
          ),
        ],
        endIcon: window.naver.maps.PointingIcon.OPEN_ARROW,
        endIconSize: 15,
        startIcon: window.naver.maps.PointingIcon.CIRCLE,
        startIconSize: 15,
        strokeColor: "#2ac1bc",
        strokeWeight: 7,
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
              '<img src="img/' +
              props.markers[index].name +
              '.png" style="width:50px; height:50px; border: 1px solid black; border-radius: 30px;" />',
            //size: new window.naver.maps.Size(38, 58),
            anchor: new window.naver.maps.Point(75, 65),
          },
        });
        if (rest.name === "반달커피") {
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
      map.setZoom(16);
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
    // "서천동 316-1",
    "서천동 729-10",
    "서천동 730",
    "서천동 718",
    "서천동 813",
    "서천동 814",
    "기흥구 서천로 121",
    "서천동 833",
    "서그내로15번길 33-2"
  ]; 
  const restName = [
  //  "투썸플레이스",
   "하우스크림",
   "타니예르베이커리",
   "반달커피",
   "메가커피",
   "배스킨라빈스",
   "파리바게트",
   "이디야",
   "푸오코"
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

  // const onSuccessGeolocation = (position) => {
  //   //현재 위치
  //   setCurtLocation(
  //     new window.naver.maps.LatLng(
  //       position.coords.latitude,
  //       position.coords.longitude
  //     )
  //   );
  // };

  // const onErrorGeolocation = () => {
  //   console.log("현재 위치를 가져오는데 에러가 발생했습니다.");
  // };

  useEffect(() => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     onSuccessGeolocation,
    //     onErrorGeolocation
    //   );
    // } else {
    //   console.log("Geolocation Not supported Required");
    // }
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
