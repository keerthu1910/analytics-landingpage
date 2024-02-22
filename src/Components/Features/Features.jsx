import React from 'react';
import './style.scss';
import computer from '../../assets/computer.svg';
import speed from '../../assets/speed.svg';
import plan from '../../assets/planning.svg';
export const Features = () => {
    return(
        <div className='features-container'>
            <div className="text-container">
                <h1>Main Features</h1>
            </div>
            <div className='text-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
            </div>
            <div className='features'>
                <div className='feature'>
                    <img src={computer}/>
                    <p className='feature-heading'>Monitoring 24/7</p>
                    <p className='feature-text'>Lorem ipsum dolor sit amet, consectetur adipis
                     cing elit. Elementum nisi aliquet volutpat.</p>
                </div>
                <div className='feature'>
                    <img src={speed}/>
                    <p className='feature-heading'>Widget System</p>
                    <p className='feature-text'>Lorem ipsum dolor sit amet, consectetur adipis
                     cing elit. Elementum nisi aliquet volutpat.</p>
                </div>
                <div className='feature'>
                    <img src={plan}/>
                    <p className='feature-heading'>Best Performance</p>
                    <p className='feature-text'>Lorem ipsum dolor sit amet, consectetur adipis
                     cing elit. Elementum nisi aliquet volutpat.</p>
                </div>
            </div>
        </div>
    )
}