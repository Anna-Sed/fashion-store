import './promo.css';
import promoImg from '../../img/pictures/promo.jpg';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className="highlight"><span>LET’S</span></span>
                             EXPLORE 
                             <span className="highlight highlight-yellow"><span>UNIQUE</span></span>
                             CLOTHES.
                        </div>
                        <div className="promo_desc">Live for Influential and Innovative fashion!</div>
                        <div className="promo__btn-wrapper">
                            <a href="#!" className="promo__btn">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="Promo" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Promo;
