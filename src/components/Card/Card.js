import './Card.css';

// Информационная карточка на главной странице
function Card(props) {
  return (
    <li className={`card card-${props.name}`}>
      <div className='card__image-bg'>
        <img className='card__image' src={props.image} alt={`${props.image}`} />
      </div>
      <h2 className='card__title'>{props.title}</h2>
      <div className='card__line'></div>
      <p className='card__description'>{props.text}</p>
    </li>
  )
}

export default Card;
