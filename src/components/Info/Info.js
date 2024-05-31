import bikini from '../../images/bb_picture.svg';

function Info() {
  return (
    <article className='info__container' id="info">
      <img src={bikini} alt="Логотип" className="info__logo"/>
      <div className="info__list">
        <h2 className="info__title">Порядок доставки и примерки заказа</h2>
        <ul className="info__text">
          <li>Добавьте товары в корзину, чтобы оформить заказ</li>
          <li>Отправим к Вам курьера, как только подтвердим заказ</li>
          <li>После примерки Вы можете купить любой понравившийся товар</li>
          <li>В случае возврата курьеру всех товаров оплачиваются только курьерские услуги: 400 рублей (Москва в пределах МКАД) или от 500 рублей за МКАД (по МО расчет индивидуально).</li>
        </ul>
        <a href="#top" className="button info__link">&uarr;</a>
      </div>
    </article>
  )
} 

export default Info;