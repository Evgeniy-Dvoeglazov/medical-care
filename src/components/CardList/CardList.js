import './CardList.css';
import Card from '../Card/Card';
import cardiogram from '../../images/cardiogram.svg';
import stethoscope from '../../images/stethoscope.svg';
import medHistory from '../../images/medical-history.svg';

function CardList() {
  return (
    <ul className='cardList'>
      <Card
        name='cardiogram'
        image={cardiogram}
        title='Онлайн-прием'
        text='Рыба текст'
      />
      <Card
        name='stethoscope'
        image={stethoscope}
        title='Экстренный случай'
        text='Рыба текст'
      />
      <Card
        name='medHistory'
        image={medHistory}
        title='Лечение рака'
        text='Рыба текст'
      />
    </ul>
  )
}

export default CardList;
