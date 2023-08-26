import './Intro.css';
import { useNavigate } from 'react-router-dom';

function Intro(props) {

  const navigate = useNavigate();

  const handleBtnContacts = () => navigate('/contacts', { replace: 'true' });

  function handleBtn() {
    if (props.loggedIn) {
      props.handleLogout();
    } else {
      props.openPopup();
    }
  }

  return (
    <section className='intro'>
      <h1 className='intro__title'>{props.title}</h1>
      <nav className='intro__nav'>
        <button className='intro__btn intro__btn_login' onClick={handleBtn}>{props.loggedIn ? 'Выйти из аккаунта' : 'Войти'}</button>
        <button className='intro__btn intro__btn_contacts' type='button' onClick={handleBtnContacts}>{props.loggedIn ? 'Перейти в контакты' : 'Контакты'}</button>
      </nav>
    </section>
  )
}

export default Intro;
