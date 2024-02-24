import React from "react";
import './style.scss';
import { Footer } from "../Footer/Footer";

export const Pricingplan = () => {
    return(
        <div className="priceplan-container">
            <div className="text-container">
                <h2 className="heading-text">Pricing Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. </p>
            </div>
            <div className="containerbox">
            <div className="plan-container">
                <div className="plan-card">
                    <div className="plan">
                        <p className="heading">Starter</p>
                        <p className="content">up to 3 users</p>
                        <div className="splitter"></div>
                    </div>
                    <div className="plan-price">
                        <p className="price">$29</p>
                        <p className="text">per month</p>
                        <button>Order</button>
                    </div>
                </div>
               
            </div>
            <div className="plan-container">
                <div className="plan-card">
                    <div className="plan">
                        <p className="heading">Premium</p>
                        <p className="content">up to 200 users</p>
                        <div className="splitter"></div>
                    </div>
                    <div className="plan-price">
                        <p className="price">$299</p>
                        <p className="text">per month</p>
                        <button>Order</button>
                    </div>
                </div>
               
            </div>
            <div className="plan-container">
                <div className="plan-card">
                    <div className="plan">
                        <p className="heading">Standard</p>
                        <p className="content">up to 20 users</p>
                        <div className="splitter"></div>
                    </div>
                    <div className="plan-price">
                        <p className="price">$99</p>
                        <p className="text">per month</p>
                        <button>Order</button>
                    </div>
                </div>
               
            </div>
            </div>
            </div>
        
    )
}