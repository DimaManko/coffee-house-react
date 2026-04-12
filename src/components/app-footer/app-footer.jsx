import './app-footer.scss';
import logo from '../../resources/icons/logo-footer.svg';
import BeansDivider from '../beans-divider/beans-divider';


const Footer = () => {
    return (
        <footer className="footer">
            <nav className='footer__nav'>
                            <ul className='footer__list'>
                                <li className='footer__item'>
                                    <img src={logo} alt="logo" />
                                    <a href="#"><span>Coffee house</span></a>
                                </li>
                                <li className='footer__item'>
                                    <a href="#"><span>Our coffee</span></a>
                                </li>
                                <li className='footer__item'>
                                    <a href="#"><span>For your pleasure</span></a>
                                </li>
                            </ul>
            </nav>
            <BeansDivider/>
        </footer>
    )
}

export default Footer;