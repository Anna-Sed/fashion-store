import './brands.css';

import hm from '../../img/brands/HM.png';
import obey from '../../img/brands/Obey.png';
import shopify from '../../img/brands/Shopify.png';
import lacoste from '../../img/brands/Lacoste.png';
import levis from '../../img/brands/Levis.png';
import amazon from '../../img/brands/Amazon.png';


const Brands = () => {
    return (
        <section className="brands">
            <div className="brands__container">
                <ul className="brands__list">
                    <li><a href="#!"><img src={hm} alt="Brand hm" /></a></li>
                    <li><a href="#!"><img src={obey} alt="Brand obey" /></a></li>
                    <li><a href="#!"><img src={shopify} alt="Brand shopify" /></a></li>
                    <li><a href="#!"><img src={lacoste} alt="Brand lacoste" /></a></li>
                    <li><a href="#!"><img src={levis} alt="Brand levis" /></a></li>
                    <li><a href="#!"><img src={amazon} alt="Brand amazon" /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Brands;
