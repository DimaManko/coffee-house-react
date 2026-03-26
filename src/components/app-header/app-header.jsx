import './app-header.scss'
import logo from '../../resources/icons/coffee-beans-header.svg'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>
                        <img src={logo} alt="logo" />
                        <a href="#"><span>Coffee house</span></a>
                    </li>
                    <li className='header__item'>
                        <a href="#"><span>Our coffee</span></a>
                    </li>
                    <li className='header__item'>
                        <a href="#"><span>For your pleasure</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header