import BeansDivider from '../beans-divider/beans-divider';
import './promo.scss'

const Promo = () => {
    return (
        <section className="promo">
            <h1 className="promo__title">Everything You Love About Coffee</h1>
            <BeansDivider color='white'/>
            <h2 className="promo__subtitle">We makes every day full of energy and taste<br/>
            Want to try our beans?</h2>
            <button className="promo__btn">More</button>
        </section>
    )
}

export default Promo;