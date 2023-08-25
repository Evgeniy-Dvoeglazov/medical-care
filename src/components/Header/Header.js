import './Header.css';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header(props) {

  const navigate = useNavigate();

  const handleBtnContacts = () => navigate('/contacts');

  function handleBtn() {
    if (props.isLogin) {
      navigate('/', { replace: 'true' })
    } else {
      props.openPopup();
    }
  }

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      <nav className='header__nav'>
        <button className='header__btn-contacts' type='button' onClick={handleBtnContacts}>{!isContacts ? 'Контакты' : 'Главная'}</button>
        <button className='header__btn-login' type='button' onClick={handleBtn}>{props.isLogin ? 'Выйти' : 'Войти'}</button>
      </nav>
    </header>
  );
}

export default Header;
