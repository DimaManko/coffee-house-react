import './our-best.scss';
import CoffeeCard from '../coffee-card/Coffee-card';

const OurBest = ({data}) => {
    return (
        <section className="ourBest">
            <h2 className="ourBest__subtitle">Our best</h2>
            <ul>
                {data.map(item => {
                    if (item.bestseller) {
                        return (
                            <li key={item.id}><CoffeeCard {...item}/></li>
                        )
                    }                
            })}
            </ul>
        </section>
    )
}

export default OurBest;