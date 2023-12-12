import React, { useState } from 'react'
import "./header.css"
import Logo from "../../assets/logo.png"
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Modal from "../modal/modal.jsx"
export default function header() {
const [menuIconVisible,setmenuIconVisible]=useState(true)
    const Toggle=()=>{
        if(menuIconVisible)setmenuIconVisible(false)
        else setmenuIconVisible(true)
    }






    return (
        <>
            <div className="header">
                <div className="logo">
                    <img className="logo_img1" src={Logo} alt="logo missing" />
                    <p className="logo_text">WeatherPic</p>
                    <img className="logo_img2" src={Logo} alt="logo missing" />
                </div>
                <div className="menus">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./weather.html">Weather</a></li>
                        <li><a href="./about.html">About</a></li>
                    </ul>

                </div>
                {menuIconVisible?<FiAlignJustify className='menuIcon' onClick={Toggle}/>:null}
                {!menuIconVisible?  <Modal />:null}
                {!menuIconVisible?<IoMdClose className='menuIcon' onClick={Toggle}/>:null}
             
            </div>
       
        </>
    )
}
