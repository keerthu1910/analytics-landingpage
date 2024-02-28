import React from "react";
import './style.scss';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
export const Pricingplan = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2300 },
            items: 1,
        },
        largeDesktop: {
            breakpoint: { max: 2300, min: 1270 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1270, min: 992 },
            items: 1,
        },
        smallDesktop: {
            breakpoint: { max: 992, min: 768 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 768, min: 680 },
            items: 1,
        },
        largeMobile: {
            breakpoint: { max: 680, min: 550 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 550, min: 400 },
            items: 1,
        },
        smallMobile: {
            breakpoint: { max: 400, min: 0 },
            items: 1,
        },
    };
    
    return(
        <div className="priceplan-container">
            <div className="text-container">
                <h2 className="heading-text">Pricing Plans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. </p>
            </div>
            <div className="containerbox">
          <Carousel responsive={responsive}
           swipeable={true}
           draggable={true}
           keyBoardControl={true}
           autoPlaySpeed={1000}
           removeArrowOnDeviceType='mobile'
           arrows={true}
           showDots={true}
           renderDotsOutside={true}
           containerClass='react-multi-carousel-list'
           itemClass='item-class'
           autoPlay={false}
           infinite={false}
           customTransition='transform 500ms ease-in-out'
           className='plan-container'
           >
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
            </Carousel>
            </div>
            
            </div>
        
    )
}