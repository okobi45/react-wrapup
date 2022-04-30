import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <p>WrapUP</p>
            </div>
            <div className="footer-nav">
                <nav className="nav">
                    <ul>
                        <li><a href="#home" className="active">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#service">service</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-credit">
                <p>Copyright 2022 by WrapUP. All Rights Reserved.</p>
            </div>
        </div>
    )
}