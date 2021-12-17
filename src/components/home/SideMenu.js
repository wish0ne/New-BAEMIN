import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs"
import { HiOutlineChevronRight } from "react-icons/hi"
import { AiFillCloseCircle } from "react-icons/ai"

import './SideMenu.css';

function SideMenu(props) {
    const starFriends = [
        { name: "박민영", userId: "user01", imgUrl: "http://www.queen.co.kr/news/photo/201903/309777_48741_1811.jpg" },
        { name: "박형식", userId: "user04", imgUrl: "https://w.namu.la/s/8d8e0345205a26d9e1059545740074c69d642975beb09645dea95da0652551b639e2dc7b8491114753d5631bf9406ef6c2f01fec8c0e46b03de1e0f8d6a8ac54de073a7c5dd382dbc3c43315c3c1cb97c307400f7a10b032441596bf71fb1b5b" },
        { name: "김지원", userId: "user05", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0az3XJEmB101vgc2xcVmkOid24ASA63pQWA&usqp=CAU" },
    ]
    const friendsList = [
        { name: "박민영", userId: "user01", imgUrl: "http://www.queen.co.kr/news/photo/201903/309777_48741_1811.jpg" },
        { name: "서강준", userId: "user02", imgUrl: "https://i.pinimg.com/736x/51/8e/30/518e3076b2637474f794d8fed2580c48.jpg" },
        { name: "한효주", userId: "user03", imgUrl: "http://cdnimage.dailian.co.kr/news/201807/news_1532496094_728386_m_1.jpg" },
        { name: "박형식", userId: "user04", imgUrl: "https://w.namu.la/s/8d8e0345205a26d9e1059545740074c69d642975beb09645dea95da0652551b639e2dc7b8491114753d5631bf9406ef6c2f01fec8c0e46b03de1e0f8d6a8ac54de073a7c5dd382dbc3c43315c3c1cb97c307400f7a10b032441596bf71fb1b5b" },
        { name: "김지원", userId: "user05", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0az3XJEmB101vgc2xcVmkOid24ASA63pQWA&usqp=CAU" },
    ]

    let [selectedMembers, setSelectedMembers] = useState([]);

    const changeHandler = (checked, friend) => {
        if (checked) {
            setSelectedMembers([...selectedMembers, friend])  
            console.log(selectedMembers)          
        } else {
            setSelectedMembers(selectedMembers.filter((el) => el.userId !== friend.userId))
        }
    }

    const deleteSelectedMember = (userId) => {
        setSelectedMembers(selectedMembers.filter((el) => el.userId !== userId))
    }


    return (
        <div className="sidemenu" style={{ right: props.sideMenuRight }}>
            <div className="close-btn"
             onClick={props.closeSideMenu}>
                <HiOutlineChevronRight />
            </div>
            <div className="side-menu-content-wrapper">
                <div className="profile-wrapper">
                    <div className="profile-img"></div>
                    <div className="profile-name">한소희
                        <span style={{fontSize: '1.5rem'}}> 님</span>
                    </div>
                </div>
                <div className="divide-line"></div>
                <div className="side-menu-content-wrapper">
                    <div className="side-menu-content-title">
                        즐겨 찾기
                    </div>
                    <div  className="friends-content-wrapper">
                    {
                        starFriends.map(function(friend, idx) {
                            return (
                                <div className="friends-profile-wrapper" key={idx}>
                                    <div className="friends-profile-img"
                                     style={{backgroundImage:"url('"+friend.imgUrl+"')"}}
                                    ></div>
                                    <div className="friends-profile-name">{ friend.name }</div>
                                    <div className="checkbox-wrapper">
                                        <input
                                            type="checkbox"
                                            name="delivery-group"
                                            id = {friend.userId}
                                            checked={selectedMembers.some(member => member.userId === friend.userId) ? true : false}
                                            onChange={(e)=>{changeHandler(e.currentTarget.checked, friend)}}
                                        ></input>
                                        <label htmlFor={friend.userId}>
                                            <BsCheckLg/>
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className="divide-line"></div>
                <div className="side-menu-content-wrapper">
                    <div className="side-menu-content-title">
                        친구 목록
                    </div>
                    <div  className="friends-content-wrapper"  style={{maxHeight: '20rem'}}>
                    {
                        friendsList.map(function(friend, idx) {
                            return (
                                <div className="friends-profile-wrapper" key={idx}>
                                    <div className="friends-profile-img"
                                     style={{backgroundImage:"url('"+friend.imgUrl+"')"}}
                                    ></div>
                                    <div className="friends-profile-name">{ friend.name }</div>
                                    <div className="checkbox-wrapper">
                                        <input
                                            type="checkbox"
                                            name="delivery-group"
                                            id = {friend.userId}
                                            checked={selectedMembers.some(member => member.userId === friend.userId) ? true : false}
                                            onChange={(e)=>{changeHandler(e.currentTarget.checked, friend)}}
                                        ></input>
                                        <label htmlFor={friend.userId}>
                                            <BsCheckLg/>
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="show-group-wrapper">
            <div className="selected-members-wrapper">
            {
                selectedMembers.map(function(member, idx) {
                    return (
                        <div className="selected-member-wrapper" key={idx}>
                            <div className="friends-profile-img"
                            style={{backgroundImage:"url('"+member.imgUrl+"')"}} 
                            >
                                <span className="delete-selected-member"
                                    onClick={()=> deleteSelectedMember(member.userId)}
                                >
                                    <AiFillCloseCircle/>
                                </span>
                            </div>
                            
                            <div className="friends-profile-name selected-name">{ member.name }</div>
                        </div>
                    )
                })
            }
            </div>
            <button type="button">그룹 만들기</button>
        </div>
        </div>
    )

}


export default SideMenu;