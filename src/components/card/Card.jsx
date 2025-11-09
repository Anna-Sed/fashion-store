const Card = (props) => {
    const { title, text, img, icon } = props;

    return (
        <div className="card">
            <a href="#!">
                <div className="card-image">
                    <img src={img} alt={title} />
                </div>
                <div className="card-description">
                    <div className="card-text">
                        <p className="card-title">{title}</p>
                        <p className="text-explore">{text}</p>
                    </div>
                    <img src={icon} alt="Arow" />
                </div>
            </a>
        </div>
    )
}

export default Card;