import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';


const Header = () => {

  const [view, setView] = useState(false);

  window.onscroll = () =>{
    setView(false);
  }

  return (
    <header className='header'>
        <div className="header-items">
            <a href="/" className="logo-wrapper">
                <img src={logo} alt="logo" className="logo-img" />
            </a>

            <nav className={`nav-wrapper ${view ? 'nav-open' : 'nav-close'}`}>
                <a href="/" className="nav-links active-link">Home</a>
                <a href="/" className="nav-links">About</a>
                <a href="/" className="nav-links">Services</a>
                <a href="/" className="nav-links">Resources</a>
                <a href="/" className="nav-links">Project</a>
            </nav>

            <a href='/' className="btn">Contact us today</a>

            {/* Mobile Menu Icon */}
            <div className={`mobile-menu-icon ${view && 'open-menu-icon'}`} onClick={()=>setView(!view)}>
              <div className="bars"></div>
              <div className="bars"></div>
              <div className="bars"></div>
            </div>
        </div>
    </header>
  )
}

export default Header
