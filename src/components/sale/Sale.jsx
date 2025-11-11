import saleImg from '../../img/pictures/sale-img.jpg';
import './sale.css';

const SaleBloc = () => {
    return (
        <section className="sale__bloc" id="sale__bloc">
            <div className="container conteiner-pd0">
                <div className="sale__content">
                    <div className="sale__text">
                        <div className="sale__title">
                            <span className="highlight"><span>PAYDAY</span></span>
                            SALE NOW
                        </div>
                        <div className="sale__description">
                            <p className="text__description">
                                Spend minimal $100 get 30% off voucher code for your next purchase
                            </p>
                            <p className="text__date">1 June - 10 June 2025</p>
                            <p className="text__terms">*Terms & Conditions apply</p>
                        </div>
                        <div className="sale__btn">
                            <a href="#!">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="sale__img">
                        <img src={saleImg} className="img" alt="Sale bloc" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SaleBloc;
