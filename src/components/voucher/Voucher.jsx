import appStore from '../../img/icons/app-store.jpg';
import googlePlay from '../../img/icons/google-play.jpg';
import mobileApp from '../../img/pictures/vouchers-img.jpg';

import './voucher.css';

const Voucher = () => {
    return (
        <section className="voucher">
            <div className="container voucher__container">
                <div className="voucher__information">
                    <div className="info__text">
                        <div className="info__title">DOWNLOAD APP & GET THE VOUCHER!</div>
                        <div className="info__desc">
                            Get 30% off for first transaction using Rondovision mobile app for now.
                        </div>
                    </div>
                    <div className="info__icon">
                        <a href="#!"><img src={appStore} alt="App Store" /></a>
                        <a href="#!"><img src={googlePlay} alt="Google Play" /></a>
                    </div>
                </div>
                <div className="voucher__image">
                    <img src={mobileApp} alt="Mobile app" className="voucher-img" />
                </div>
            </div>
        </section>
    )
}

export default Voucher;
