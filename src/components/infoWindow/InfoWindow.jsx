import './infoWindow.css';
import successfully from '../../img/icons/successfully.png';

const InformationWindow = (props) => {
    const { title, description, onClose } = props;

    return (
        <div className="information__modal">
            <div className="information__content">
                <div className="info__header">
                    <div className="header-title">{title}</div>
                </div>
                <div className="info__description">
                    <img className="info-img" src={successfully} alt="Successful registration" />
                    <p className="text-desc">{description}</p>
                </div>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default InformationWindow;
