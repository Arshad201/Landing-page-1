import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="newsletter-wrapper">
            <div>
                <h3 className="heading">Subscribe to Our Newsletter For Weekly Article Update.</h3>
                <p className="para">Passages of lorem ipsum available, but the majority have suffered alteration, by injected words.</p>
            </div>
            <div>
                <button className="btn">Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
