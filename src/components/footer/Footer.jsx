import fb from '../../img/social/fb.svg';
import inst from '../../img/social/inst.svg';
import tw from '../../img/social/tw.svg';
import linkedId from '../../img/social/in.svg';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container container-pd0">
                <div className="footer__information">
                    <div className="information">
                        <div className="information__title">FASHION</div>
                        <div className="information__desc">Complete your style with awesome clothes from us.</div>
                        <div className="information__social-img">
                            <a href="#!"><img src={fb} alt="facebook" /></a>
                            <a href="#!"><img src={inst} alt="instagram" /></a>
                            <a href="#!"><img src={tw} alt="twitter" /></a>
                            <a href="#!"><img src={linkedId} alt="linkedId" /></a>
                    </div>
                    </div>
                    <div className="footer__menu">
                        <div className="menu__company menu">
                            <p className="text">Company</p>
                            <ul>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Contact us</a></li>
                                <li><a href="#!">Support</a></li>
                                <li><a href="#!">Careers</a></li>
                            </ul>
                        </div>
                        <div className="menu__link menu">
                            <p className="text">Quick Link</p>
                            <ul>
                                <li><a href="#!">Share Location</a></li>
                                <li><a href="#!">Orders Tracking</a></li>
                                <li><a href="#!">Size Guide</a></li>
                                <li><a href="#!">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="menu__legal menu">
                            <p className="text">Legal</p>
                            <ul>
                                <li><a href="#!">Terms & conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </footer>
    )
}

export default Footer;