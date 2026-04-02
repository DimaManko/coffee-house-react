import './our-best.scss';

const OurBest = ({data}) => {
    return (
        <section className="ourBest">
            <h2 className="ourBest__subtitle">Our best</h2>
            {data.map(item => {
                return (
                    <img src={item.src} alt="coffee" />
                )
            })}
        </section>
    )
}

export default OurBest;