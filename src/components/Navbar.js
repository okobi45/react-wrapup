import React from "react";

export default function Navbar(){
    return(
        <header className="header">
        <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="logo">
                 <a href="#">WrapUP</a>
               </div>
               <input type="checkbox" id="nav-check" />
               <label for="nav-check" class="nav-toggler">
                  <span></span>
               </label>
               <nav className="nav">
                  <ul>
                     <li><a href="#home" className="active">home</a></li>
                     <li><a href="#about">about</a></li>
                     <li><a href="#service">service</a></li>
                     <li><a href="#contact">contact</a></li>
                  </ul>
               </nav>
            </div>
        </div>
     </header> 
    )
}