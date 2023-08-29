import AppDevImage from "../../assets/images/app-dev-image.svg";
import Cloud from "../../assets/images/cloud.svg";
import Ux from "../../assets/images/ux.svg";

import "./Features.css";

const Features = () => {
  return (
    <section className='features'>
        <div className="features-wrapper">
            <h5 className="sub-heading">CARE FEATURES</h5>
            <h3 className="heading">Awesome Service With Our Tools</h3>
            <div className="features-card-container">
                <div className="features-card">
                    <img src={AppDevImage} alt="app development" />
                    <h6 className="card-heading">App Development</h6>
                    <p className="para">Helping families live intelligently means we’re always working to bring our customers.</p>
                </div>
                <div className="features-card">
                    <img src={Cloud} alt="app development" />
                    <h6 className="card-heading">Cloud Storage</h6>
                    <p className="para">Helping families live intelligently means we’re always working to bring our customers.</p>
                </div>
                <div className="features-card">
                    <img src={Ux} alt="app development" />
                    <h6 className="card-heading">UX Planning</h6>
                    <p className="para">Helping families live intelligently means we’re always working to bring our customers.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
