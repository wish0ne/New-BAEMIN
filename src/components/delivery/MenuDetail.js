import React from "react";
import { useNavigate } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi"
import { BsCheckLg } from "react-icons/bs"
import { IoBasket } from "react-icons/io5"
import './Delivery.css';
import './Store.css';
import '../home/SideMenu.css';

function MenuDetail() {
    const navigation = useNavigate();

   const goToStore = () => {
       navigation("/store")
   }

   const goToOrder = () => {
       navigation("/shopping-basket")
   }

    return (
        <div>
            <div className="delivery-header"><BiLeftArrowAlt/></div>
            <div className="store-detail-wrapper" style={{height:'8rem'}}>
                <div className="store-detail-header">
                    <div className="store-name">[메뉴1] 메뉴 제목</div>  
                </div>
            </div>

            <div className="menu-content-wrapper">
                <div className="menu-detail-row">
                    <div className="menu-detail-title">가격</div>
                    <div className="menu-detail-title">12,000원</div>
                </div>
            </div>
            <div className="gray-line"></div>
            <div className="menu-content-wrapper">
                <div className="menu-detail-row menu-detail-column">
                    <div className="menu-detail-title">토핑추가</div>
                    <div className="menu-option">
                        <input
                            type="checkbox"
                            id="option01"
                        ></input>
                        <label
                            htmlFor="option01"
                            style={{left: "-2.2rem", top: "-0.3rem"}}
                        ><BsCheckLg/>
                        </label>
                        <div>계란 추가</div>
                        <div>1,000원</div>
                    </div>

                    <div className="menu-option">
                        <input
                            type="checkbox"
                            id="option02"
                        ></input>
                        <label
                            htmlFor="option02"
                            style={{left: "-2.2rem", top: "-0.3rem"}}
                        ><BsCheckLg/>
                        </label>
                        <div>스팸 추가</div>
                        <div>1,000원</div>
                    </div>

                    <div className="menu-option">
                        <input
                            type="checkbox"
                            id="option03"
                        ></input>
                        <label
                            htmlFor="option03"
                            style={{left: "-2.2rem", top: "-0.3rem"}}
                        ><BsCheckLg/>
                        </label>
                        <div>상추 추가</div>
                        <div>1,500원</div>
                    </div>
                </div>
            </div>
            <div className="gray-line"></div>
            <div className="menu-content-wrapper">            
                <div className="menu-detail-row">
                    <div className="menu-detail-title">수량</div>
                    <div></div>
                </div>
            </div>
            <button type="button" id="group-delivery-btn"
                onClick={goToStore}
            >
                1개 담기
            </button>

            <div className="group-basket-btn"
                onClick={goToOrder}
            >
                <IoBasket />
            </div>
        </div>
    )
}

export default MenuDetail;