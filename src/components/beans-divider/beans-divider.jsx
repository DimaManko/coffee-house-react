import './beans-divider.scss'
import logoBlack from '../../resources/icons/coffee-beans-black.svg'
import logoWhite from '../../resources/icons/coffee-beans-white.svg'

const BeansDivider = ({color = 'black'}) => {
    const logo = color === 'white' ? logoWhite : logoBlack
    return (
        <div className={`beans-divider beans-divider_${color}`}>
            <img src={logo} alt="beans-divider" />
        </div>
    )
}

export default BeansDivider;