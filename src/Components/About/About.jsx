import aboutImage from "../../assets/images/about.png";
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className="about-wrapper">
        <div className="about-img-wrapper">
            <img src={aboutImage} alt="about" />
        </div>
        <div className="about-content">
            <h5 className="sub-heading">About</h5>
            <h3 className="heading">Influencer Marketing for Your Business</h3>
            <p className="para">With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back the Layers which enable us to understand, connect, represent and Dominate your market.</p>
            <button className="btn">Phone Number: +002698 22 33</button>
        </div>
      </div>
    </section>
  )
}

export default About
