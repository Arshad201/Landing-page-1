import WhoWeAreImg from "../../assets/images/WhoWeAre.png";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className='whoWeAre'>
      <div className="whoWeAre-wrapper">
        <div className="whoWeAre-img-wrapper">
            <img src={WhoWeAreImg} alt="whoWeAre" />
        </div>
        <div className="whoWeAre-content">
            <h5 className="sub-heading">Who We Are</h5>
            <h3 className="heading">Have A Project In Mind? Let’s Get To Work</h3>
            <p className="para">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium totam rem apereaque abillo inventore veritatis quasi architecto beatae</p>
            <ol>
              <li>Business Planning, Strategy</li>
              <li>Financial Projections And Analysis</li>
              <li>International Business Opportunities</li>
            </ol>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
