import React from "react";

export default function Footer2(){
    return(
            <footer class="footer-distributed">

                <div class="footer-left">
                    <h3>WrapUP</h3>

                    <p class="footer-links">
                        <a href="#home">Home</a>
                        |
                        <a href="#about">About</a>
                        |
                        <a href="#contact">Contact</a>
                        |
                        <a href="#service">Service</a>
                    </p>

                    <p class="footer-company-name">Copyright © 2022 <strong>WrapUP Team</strong> | All rights reserved</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Nigeria</span>
                            Lagos</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+234-090-1234</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:okobieigbe@gmail.com">wrapup22@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        <strong>WrapUP</strong> is an online company that helps
                        companies, organisations and marketing firms achieve their
                        full potentials by provided custom support services on 
                        demand.
                    </p>
                    <div class="footer-icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
    )
}