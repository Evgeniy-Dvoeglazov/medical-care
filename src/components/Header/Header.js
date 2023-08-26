import './Header.css';
// import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header(props) {

  const navigate = useNavigate();

  const handleBtnContacts = () => navigate('/contacts', { replace: 'true' });

  const handlerClickLogo = () => navigate('/', { replace: 'true' });

  function handleBtn() {
    if (props.loggedIn) {
      props.handleLogout();
    } else {
      props.openPopup();
    }
  }

  return (
    <header className='header'>
      <button className='header__logo' type='button' onClick={handlerClickLogo}></button>
      <nav className='header__nav'>
        <button className='header__btn-contacts' type='button' onClick={handleBtnContacts}>Контакты</button>
        <button className='header__btn-login' type='button' onClick={handleBtn}>{props.loggedIn ? 'Выйти' : 'Войти'}</button>
      </nav>
    </header>
  );
}

export default Header;
