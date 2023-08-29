import "./Footer.css";

import FooterLogo from "../../assets/images/logo.svg";
import fb from "../../assets/images/fb.svg";
import twitter from "../../assets/images/twitter.svg";
import insta from "../../assets/images/insta.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-widgets">
        <div className="widget">
            <img src={FooterLogo} />
            <p className="footer-text">2021 Award winning Vaccination <br/>and Lorem ipsum dolor sit amet</p>
            <div className="social-icons-wrapper">
                <a href="/" className="social-icon">
                    <img src={fb} alt="facebook" />
                </a>
                <a href="/" className="social-icon">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="/" className="social-icon">
                    <img src={insta} alt="instagram" />
                </a>
            </div>
        </div>
        <div className="widget">
            <h6 className="widget-heading">Location</h6>
            <a href="/" className="footer-link">America</a>
            <a href="/" className="footer-link">Asia</a>
            <a href="/" className="footer-link">Europe</a>
            <a href="/" className="footer-link">Africa</a>
        </div>
        <div className="widget">
            <h6 className="widget-heading">Contact</h6>
            <a href="/" className="footer-link">About me</a>
            <a href="/" className="footer-link">Teams</a>
            <a href="/" className="footer-link">Profile</a>
            <a href="/" className="footer-link">FAQ</a>
        </div>
        <div className="widget">
            <h6 className="widget-heading">Legals</h6>
            <a href="/" className="footer-link">Privay</a>
            <a href="/" className="footer-link">Disclaimer</a>
            <a href="/" className="footer-link">Terms</a>
            <a href="/" className="footer-link">Company</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
