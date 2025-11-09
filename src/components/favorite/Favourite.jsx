import './favourite.css';

import img1 from '../../img/pictures/01.jpg';
import img2 from '../../img/pictures/02.jpg';
import arrow from '../../img/icons/arrow.svg'
import Card from '../card/Card.jsx';

const Favourite = () => {
    return (
        <section className="favourite" id="favourite">
            <div className="container">
                <div className="favourite__title">
                    <h2 className="title">Young’s Favourite</h2></div>
                <div className="favourite_cards">
                    <Card title="Trending on instagram" text="Explore Now!" img={img1} icon={arrow}/>
                    <Card title="All Under $40" text="Explore Now!" img={img2} icon={arrow}/>
                </div>
            </div>
        </section>
    )
}

export default Favourite;