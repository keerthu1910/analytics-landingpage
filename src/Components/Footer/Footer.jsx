import React from "react";
import './style.scss';
import logo from '../../assets/footerlogo.png';
import twitter from '../../assets/Twitter.png';
import facebook from '../../assets/Facebook.png';
import instagram from '../../assets/Instagram.png';
export const Footer = () => {
    return(
        <div className="footer-container">
            <div className="logo-container">
                <img src={logo}/>
            </div>
            <div className="nav-container">
                <a href="#">Products</a>
                <a href="#">Pricing plans</a>
                <a href="#">FAQ</a>
                <a href="#">Blog</a>
            </div>
            <div className="socialmedia-container">
                <a href="#"><img src={twitter} /></a>
                <a href="#"><img src={facebook} /></a>
                <a href="#"><img src={instagram} /></a>
            </div>
        </div>
    )
}