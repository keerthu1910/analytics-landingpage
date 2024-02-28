import React from 'react';
import './style.scss';
import chart from '../../assets/chart.png';
import bargraph from '../../assets/bargraph.png';
import calendar from '../../assets/calendar.png';

export const Reports = () => {
    return(
        <div className='report-container'>
            <div className='report-card'>
                <div className='report-text'>
                    <p className='heading'>Automated Reports <br></br>& Widget Alerts</p>
                    <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
                </div>
                <div className='report-img'>
                    <img src={chart} alt='chart'/>
                </div>
            </div>
            <div className='report-card'>
                
                <div className='report-img'>
                    <img src={bargraph} alt='chart'/>
                </div>
                <div className='report-text'>
                    <p className='heading'>Fully customizable to<br></br>address your needs </p>
                    <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
                </div>
            </div>
            <div className='report-card'>
                <div className='report-text'>
                    <p className='heading'>Pre-built Dashboard Templates</p>
                    <p className='text-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
                </div>
                <div className='report-img'>
                    <img src={calendar} alt='chart'/>
                </div>
            </div>
        </div>
    )
}