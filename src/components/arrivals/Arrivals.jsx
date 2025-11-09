import './arrivals.css';

import Card from '../card/Card';

import img1 from '../../img/categories/01.jpg';
import img2 from '../../img/categories/02.jpg';
import img3 from '../../img/categories/03.jpg';
import arrow from '../../img/icons/arrow.svg'

const Arrivals = () => {
    return (
        <section className="arrivals" id="arrivals">
            <div className="container">
                <div className="arrivals__title">
                    <h2 className="title title-uppercase">new arrivals</h2></div>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" text="Explore Now!" img={img1} icon={arrow}/>
                    <Card title="Coats & Parkas" text="Explore Now!" img={img2} icon={arrow}/>
                    <Card title="Tees & T-Shirt" text="Explore Now!" img={img3} icon={arrow}/>
                </div>
            </div>
        </section>
    )
}

export default Arrivals;
