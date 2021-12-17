import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function OrderComplete() {
  return (
    <div className="complete-content-wrapper">
      <div className="complete-content-icon">
        <BsCheckCircleFill />
      </div>
      <div className="complete-content-text">모두 정산을 마쳤습니다!</div>
      <div className="complete-content-text" style={{ fontSize: "1.5rem" }}>
        이제 주문이 진행됩니다!
      </div>
      <div className="complete-char-img"></div>
    </div>
  );
}

export default OrderComplete;
