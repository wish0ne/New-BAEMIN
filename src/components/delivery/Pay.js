import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsCheckCircleFill } from "react-icons/bs"
import AlertPayCheck from "./AlertPayCheck.js"
import './Delivery.css'

function Pay() {
    const navigation = useNavigate();
    const [time, setTime] = useState(0);
    const [payCheck, setPayCheck] = useState(false);

    const goToPay = () => {
        navigation("/pay")
    }

    const cancleOrder = () => {
        alert("주문이 취소되었습니다.")
        navigation("/store")
    }

    useEffect(() => {
        const tick = setTimeout(() => {
            setTime(time + 1);
        }, 1000);
        console.log(tick);
        if (tick===10) {
            alert("서강준 님이 정산을 마쳤어요!")
            setPayCheck(true)
            navigation('/order-complete')
        }
    }, [time]);

    return (
        <div>
            { false && <AlertPayCheck/> }
        <div className="title-header">
            <BiLeftArrowAlt/>
            <span>정산 현황</span>
            <span className="menu-delete-all">전체 삭제</span>
        </div>

        
        <div className="delivery-content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="friend-row-box">
                <div className="friends-profile-img"
                style={{backgroundImage: "url('https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg')"}}
                ></div>
                <div className="friends-profile-name">나/방장</div>
                <div className="friends-pay-money">12,000원</div>
                <div className="check-pay-icon"><BsCheckCircleFill /></div>
                <div className="re-alarm-btn">다시 알림 보내기</div>
            </div>

            <div className="friend-row-box">
                <div className="friends-profile-img"></div>
                <div className="friends-profile-name">박민영</div>
                <div className="friends-pay-money">12,000원</div>
                <div className="check-pay-icon"><BsCheckCircleFill /></div>
                <div className="re-alarm-btn">다시 알림 보내기</div>
            </div>
            <div className="friend-row-box">
                <div className="friends-profile-img"
                style={{backgroundImage: "url('https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg')"}}
                ></div>
                <div className="friends-profile-name">서강준</div>
                <div className="friends-pay-money">12,000원</div>
                <div className="check-pay-icon"
                    style={{ color: !payCheck && "#C4C4C4" }}
                ><BsCheckCircleFill /></div>
                <div className="re-alarm-btn"
                    style={{ visibility: !payCheck && "visible" }}
                >다시 알림 보내기</div>
            </div>
            </div>
        </div>
        <button type="button" id="group-delivery-btn"
        onClick={cancleOrder}
        style={{backgroundColor: "#FF5271"}}
        >주문 취소하기</button>


        </div>
    )
}

export default Pay;