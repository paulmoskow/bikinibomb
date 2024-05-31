import { NavLink, useLocation } from "react-router-dom"

function NavPopup({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <div onClick={onClose} className={`nav-popup ${isOpen ? 'nav-popup_opened' : ''}`}>
      <div className="nav-popup__container">
        <div className="nav-popup__navtab">
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item nav-popup__item_top">КАТАЛОГ</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item nav-popup__item_top">НОВИНКИ</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item nav-popup__item_top">PREMIUM ТОВАРЫ</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item nav-popup__item_top">скидки</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item nav-popup__item_top">подарочный сертификат</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">раздельные купальники</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">слитные купальники</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">туники</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">шляпы</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">очки</NavLink>
          <a href="#info" onClick={onClose} className="nav-popup__item">доставка и оплата</a>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">отзывы</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">блог</NavLink>
          <NavLink to="/bikinibomb" onClick={onClose} className="nav-popup__item">о нас</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavPopup;
