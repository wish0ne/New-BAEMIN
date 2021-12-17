import React from "react"
import "./AlertModal.css"

function AlertPayCheck(props) {


    return (
        <div className="alert-modal-wrapper">
            <div className="alert-message">{ props.name }님이 정산을 마쳤어요!</div>
        </div>
    )
}

export default AlertPayCheck;