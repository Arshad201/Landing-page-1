import Member1 from "../../assets/images/member-img-1.png";
import Member2 from "../../assets/images/member-img-2.png";
import Member3 from "../../assets/images/member-img-3.png";

import "./Team.css";

const Team = () => {
  return (
    <section className='team'>
        <div className="team-wrapper">
            <h5 className="sub-heading">Meet Our Team</h5>
            <h3 className="heading">Experience Team Members</h3>
            <div className="team-card-container">
                <div className="team-card">
                    <img src={Member1} alt="app development" />
                    <h6 className="card-heading">Robert C. Simmons</h6>
                    <p className="para">Business Consultant</p>
                </div>
                <div className="team-card">
                    <img src={Member2} alt="app development" />
                    <h6 className="card-heading">Christopher L. Wagner</h6>
                    <p className="para">Senior Manager</p>
                </div>
                <div className="team-card">
                    <img src={Member3} alt="app development" />
                    <h6 className="card-heading">Lawrence C. Dickerson</h6>
                    <p className="para">Financial Consultant</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
