import './header.css';
import logoImg from '../../img/icons/logo.svg';

function Header (props) {
const { onSignInClick } = props;

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo" />
                        <span>Fashion</span>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#arrivals">catalogue</a></li>
                            <li><a href="#sale__bloc">fashion</a></li>
                            <li><a href="#favourite">favourite</a></li>
                            <li><a href="#!">lifestyle</a></li>
                            <li><a href="#!" className="header__nav-btn" onClick={onSignInClick}>Sign in</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
