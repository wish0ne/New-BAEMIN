import React from "react"
import { useNavigate } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi"
import './Delivery.css'

function Order() {
    const navigation = useNavigate();

    const goToPay = () => {
        navigation("/pay")
    }

    return (
        <div>
        <div className="title-header">
            <BiLeftArrowAlt/>
            <span>주문하기</span>
            <span className="menu-delete-all">전체 삭제</span>
        </div>
        
        <div className="delivery-content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="menu-title-name">배달 정보</div>
            <div className="address-wrapper">
                <div className="address-main">
                    용인시 기흥구 서천동 1
                </div>
                <input
                class="address-input"
                type="text"
                value="전자정보대학 331호"
                ></input>
            </div>
            </div>
        </div>

        <div className="delivery-content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="menu-title-name">결제 정보</div>
            <div className="friend-row-box my-pay-info">
                <div className="friends-profile-img"
                style={{backgroundImage: "url('https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg')"}}
                ></div>
                <div className="friends-profile-name">나</div>
                <div className="friends-pay-money">12,000원</div>
            </div>

            <div className="friend-row-box">
                <div className="friends-profile-img"></div>
                <div className="friends-profile-name">박민영</div>
                <div className="friends-pay-money">12,000원</div>
            </div>
            <div className="friend-row-box">
                <div className="friends-profile-img"
                style={{backgroundImage: "url('https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg')"}}
                ></div>
                <div className="friends-profile-name">서강준</div>
                <div className="friends-pay-money">12,000원</div>
            </div>
            </div>
        </div>

        <div className="delivery-content-wrapper">
            <div style={{width:'30rem'}}>
            <div className="menu-title-name">결제 수단</div>
            <div className="card-wrapper">
                <div className="card-company">하나카드</div>
                <div className="card-name">카카오페이 APEACH 체크카드 하나카드</div>
            </div>
            </div>
        </div>

        <button type="button" id="group-delivery-btn"
        onClick={goToPay}
        >결제 및 정산 요청하기</button>
        </div>
    )
}

export default Order;