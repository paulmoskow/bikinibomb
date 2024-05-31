import { NavLink } from 'react-router-dom';

function Cards() {
  return (
    <article className='cards__container'>
      <div className='cards__container_landing'>
        <NavLink to="/" className="cards__container_overlay" >
          <h2 className="cards__container_title">Бестселлеры</h2>
        </NavLink>
      </div>
    </article>
  )
} 

export default Cards;