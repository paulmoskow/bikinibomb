import logo from '../../images/logo.svg';
import contact from '../../images/contact.svg'
import insta from '../../images/insta_logo.svg';
import telegram from '../../images/telegram_logo.svg';
import watsapp from '../../images/whatsupp_logo.svg';
import account from '../../images/account_logo.svg';
import basket from '../../images/basket_logo.svg';
import order from '../../images/order_logo.svg';
import { NavLink } from 'react-router-dom';

function Header({onMenu}) {
  return (
    <header className="header">
      <div className='header__container_rose'> 
        <h1 className='header__title'>ДОБРО ПОЖАЛОВАТЬ В ОНЛАЙН-ШОУРУМ ПЛЯЖНОЙ ОДЕЖДЫ * бесплатная доставка при покупке * неограниченная примерка без предоплат * ДОБРО ПОЖАЛОВАТЬ В ОНЛАЙН-ШОУРУМ ПЛЯЖНОЙ ОДЕЖДЫ * бесплатная доставка при покупке * неограниченная примерка без предоплат * ДОБРО ПОЖАЛОВАТЬ В ОНЛАЙН-ШОУРУМ ПЛЯЖНОЙ ОДЕЖДЫ</h1>
      </div>
      <div className="header__container header__container_visible">
        <NavLink to="/bikinibomb"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
        <NavLink to="/bikinibomb"><img src={contact} className="button header__logo" alt="Контакты" /></NavLink>
      </div>
      <nav className="header__container header__container_visible">
        <div onClick={onMenu} className="button header__button header__menu-button"></div>
        <div className="header__container">
          <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={insta} alt="Инстаграм" /></NavLink>
          <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={telegram} alt="Телеграм" /></NavLink>
          <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={watsapp} alt="Вотсапп" /></NavLink>
          <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={account} alt="Личный кабинет" /></NavLink>
          <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={basket} alt="Корзина" /></NavLink>
          <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={order} alt="Корзина" /></NavLink>
        </div>
      </nav>
      <div className="header__container header__container_hidden">
        <NavLink to="/bikinibomb"><img src={contact} className="button header__logo" alt="Контакты" /></NavLink>
        <NavLink to="/bikinibomb"><img src={logo} className="button header__logo" alt="Логотип" /></NavLink>
        <nav>
          <div className="header__container">
            <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={insta} alt="Инстаграм" /></NavLink>
            <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={telegram} alt="Телеграм" /></NavLink>
            <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={watsapp} alt="Вотсапп" /></NavLink>
            <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={account} alt="Личный кабинет" /></NavLink>
            <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={basket} alt="Корзина" /></NavLink>
            <NavLink to="/bikinibomb" className="button header__button"><img className="header__nav" src={order} alt="Корзина" /></NavLink>
          </div>
          <div className="header__container">
            <a href="#info" className="button header__button">Доставка и оплата</a>
            <NavLink to="/bikinibomb" className="button header__button">О нас</NavLink>
            <NavLink to="/bikinibomb" className="button header__button">Блог</NavLink>
            <NavLink to="/bikinibomb" className="button header__button">Отзывы</NavLink>
          </div>
        </nav>
      </div>
      <nav className="header__container header__container_rose header__container_hidden">
        <div className="header__container header__container_top">
          <NavLink to="/bikinibomb" className="button header__button header__button_top">КАТАЛОГ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button header__button_top">НОВИНКИ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button header__button_top">PREMIUM ТОВАРЫ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button header__button_top">СКИДКИ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button header__button_top">ПОДАРОЧНЫЙ СЕРТИФИКАТ</NavLink>
        </div>
        <div className="header__container header__container_bottom">
          <NavLink to="/bikinibomb" className="button header__button">РАЗДЕЛЬНЫЕ КУПАЛЬНИКИ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button">СЛИТНЫЕ КУПАЛЬНИКИ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button">ТУНИКИ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button">ШЛЯПЫ</NavLink>
          <NavLink to="/bikinibomb" className="button header__button">ОЧКИ</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;


