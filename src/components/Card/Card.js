import './Card.css';

function Card(props) {
  return (
    <li className='card'>
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
