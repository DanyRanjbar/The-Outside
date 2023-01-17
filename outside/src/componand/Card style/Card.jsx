import "./Card.css"
import pic1 from "../picture/pic1.png"
import pic2 from "../picture/pic2.png"
import pic3 from "../picture/pic3.png"
import pic4 from "../picture/pic4.png"


const Card = () => {
    return(
        <section className="hero-section">
            <div className="card-grid">
                <a className="card">
                <div  className="card__background" style={{ backgroundImage: `url(${pic1})` }}></div>
                <div className="card__content">
                    <h3 className="card__heading">Low price</h3>
                    <p className="card__category">Our devices are completely produced in the country and we are superior to our competitors in terms of price. We are always trying to provide quality services to our compatriots at a low price.</p>
                </div>
                </a>
                <a className="card">
                <div className="card__background" style={{ backgroundImage: `url(${pic2})` }}></div>
                <div className="card__content">
                    <h3 className="card__heading">High Quality</h3>
                    <p className="card__category">We are always trying to raise the quality in the long term while keeping the price of our product low. We are trying to localize the basic parts of the machine in the coming years so that we no longer depend on foreign companies and countries.</p>
                </div>
                </a>
                <a className="card">
                <div className="card__background" style={{ backgroundImage: `url(${pic3})` }}></div>
                <div className="card__content">
                    <h3 className="card__heading">Internal platform</h3>
                    <p className="card__category">We are proud to be the first company to produce a product whose platform can compete with other foreign models.</p>
                </div>
                </a>
                <a className="card">
                <div className="card__background" style={{ backgroundImage: `url(${pic4})` }}></div>
                <div className="card__content">
                    <h3 className="card__heading">After-sales service</h3>
                    <p className="card__category">Our company provides 2-year warranty and 5-year after-sales service for each device for the complete satisfaction of our dear customers and compatriots, so that our dear buyer can safely receive services from Outside collection.</p>
                </div>
                </a>
            </div>
        </section>
    )
}

export default Card