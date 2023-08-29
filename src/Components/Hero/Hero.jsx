import HeroImg from "../../assets/images/heroImg.png";
import "./Hero.css";


const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="hero-wrapper">
        <div className="hero-content">
          <h2 className="hero-heading">Our <span>consultation</span> is always in sync with your strategy</h2>
          <p className="hero-para">Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam elit sociis luctus et aliquam libero.</p>
          <button className='btn'>Our Services</button>
        </div>
        <div className="hero-img-container">
          <img src={HeroImg} alt="" className="hero-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
