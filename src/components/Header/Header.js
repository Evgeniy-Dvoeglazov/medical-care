import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header(props) {

  const navigate = useNavigate();

  // Обработка клика на кнопки Профиль и Контакты (в зависимости от статуса авторизации)
  function handleBtnNav() {
    if (props.loggedIn) {
      navigate('/user', { replace: 'true' });
    } else {
      navigate('/contacts', { replace: 'true' });
    }
  }

  // Обработка клика на логотип
  const handlerClickLogo = () => navigate('/', { replace: 'true' });

  // Обработка клика на кнопку авторизации
  function handleBtn() {
    if (props.loggedIn) {
      props.handleLogout();
    } else {
      props.openPopup();
    }
  }

  return (
    <header className='header'>
      <button className='header__logo hover' type='button' onClick={handlerClickLogo} aria-label='Кнопка перехода на главную страницу'></button>
      <nav className='header__nav'>
        <button className='header__btn-nav hover' type='button' onClick={handleBtnNav}>{props.loggedIn ? 'Профиль' : 'Контакты'}</button>
        <button className='header__btn-login hover' type='button' onClick={handleBtn}>{props.loggedIn ? 'Выйти' : 'Войти'}</button>
      </nav>
    </header>
  );
}

export default Header;
