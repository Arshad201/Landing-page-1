import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className='portfolio'>
        <div className="portfolio-wrapper">
            <h5 className="sub-heading">Latest Project & Case</h5>
            <h3 className="heading">Let’s Looks Our Global Projects</h3>
            <div className="portfolio-card-container">
                <div className="portfolio-card">
                    <h6 className="card-heading">Technical Analysis</h6>
                    <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                </div>
                <div className="portfolio-card">
                    <h6 className="card-heading">Technical Analysis</h6>
                    <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                </div>
                <div className="portfolio-card">
                    <h6 className="card-heading">Technical Analysis</h6>
                    <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                </div>
                <div className="portfolio-card">
                    <h6 className="card-heading">Technical Analysis</h6>
                    <p className="para">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
