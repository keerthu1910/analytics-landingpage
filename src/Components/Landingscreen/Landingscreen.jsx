import React,{useState} from 'react';
import './style.scss';
import logo from '../../assets/logo.png';
import logotext from '../../assets/ANALYTICS.png';
import textblockimage from '../../assets/textblockimage.png';
export const Landingscreen = () => {
    const [hidemenu,setHidemenu] = useState(false);
    const handleMenu = () => {
        setHidemenu(!hidemenu)
    }
    return(
        <div className='container' >
            <div className='navbar-container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo'/><span><img src={logotext} alt='analytics'/></span>
                </div>
                <div className='menu-container'>
                    <a>Products</a>
                    <a>Pricing</a>
                    <a>FAQ</a>
                    <a>Blog</a>
                    <a>Services</a>
                </div>
                <div className='btn-container'>
                    <button className='sign-in-btn'>Sign in</button>
                    <button className='sign-up-btn'>Sign Up</button>
                </div>
                <div className='hamburger-menu' >
                    <button onClick={()=>setHidemenu(!hidemenu)}>{'\u2630'}</button>
                </div>
            </div>
            <div className={hidemenu?'normal':'vertical-menu-container'}>
                    <div className='first-menu'>
                    <a>Products</a>
                    <button onClick={()=>setHidemenu(!hidemenu)}>{'\u2715'}</button>
                    </div>
                    <a>Pricing</a>
                    <a>FAQ</a>
                    <a>Blog</a>
                    <a>Services</a>
                    <button className='sign-in-btn'>Sign in</button>
                    <button className='sign-up-btn'>Sign Up</button>
            </div>
            <div className='textblock-container'>
                <div className='text-block'>
                    <p className='heading-text'>Monitor your business <br></br> on real-time dashboard</p>
                    <p className='block-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
                    <button className='text-btn'>Try Now</button>
                </div>
                <div className='image-block'>
                    <img src={textblockimage} alt='analyticsimage'/>
                </div>
                
            </div>
        </div>
    )
}