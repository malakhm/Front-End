import '../Styles/Header.css'
import Logo from '../Assets/LOGO.png'
import phonelogo from '../Assets/phonelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


import { useState } from 'react'
const Header = () => {
    const [collapse, setCollapsed] = useState(true)
    return (


        <header>

            <nav className="Home-container">

                <ul className='ulheader'>
                    <li className='home-button-header'><a href="/">Home</a></li>
                    <li className='Menu-button-header'><a href="/Menu">Menu</a></li>
                    <li className='About-button-header'><a href="/About">About us</a></li>
                    <li className='contact-button-header'><a href="/Contact">Contact us</a></li>
                </ul>
                
                <div><a href="/"><img className='headerlogo' alt='alt: LOGO' src={Logo}/></a></div>
            

                <div className='phonenumber'>
                    <a href="https://wa.me/message/6OCI2AOKZB47D1?src=qr"><img className='phonelogoheader' alt='alt: PHONE LOGO' src={phonelogo}/></a>
                    <p><a href="https://wa.me/message/6OCI2AOKZB47D1?src=qr" target='_blank'>+971 58 546 2004</a></p>
                </div>

            </nav>
            <a href="/"><img className='headerlogo-mobile' alt='alt: LOGO' src={Logo}/></a>
            <FontAwesomeIcon icon={collapse?faBars:faXmark} className="header_icon" onClick={()=>setCollapsed(!collapse)}/>
            
            
                   

            <nav className='header_nav_mobile'>
            


            {!collapse ?
            <ul className='header_ul_mobile'>
   
          
             <li className='home-button-header'><a href="/">Home</a></li>
                <li className='Menu-button-header'><a href="Menu">Menu</a></li>
                <li className='About-button-header'><a href="About">About us</a></li>
                <li className='contact-button-header'><a href="Contact">Contact us</a></li>
      
             </ul>:null}
            </nav> 
       
            
        </header>
  
    )
}

export default Header