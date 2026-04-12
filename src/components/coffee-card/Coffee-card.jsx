import './coffee-card.scss'

const CoffeeCard = ({name, price, src, country, bestseller}) => {
    const clazz = `coffee-item ${bestseller ? 'coffee-item_best' : ''}` 
    return (
        <div className={clazz}>
            <div className="coffee-item__img-wrapper">
                <img src={src} alt={name} className='coffee-item__img'/>
            </div>
            <div className="coffee-item__info">
                <div className='coffee-item__name'>{name}</div>
                {country && !bestseller ? <div className="coffee-item__country">{country}</div> : null}
                <div className="coffee-item__price">{price}</div>
            </div>
        </div>
    )
}

export default CoffeeCard;