import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Contacts from '../Contacts/Contacts';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Popup from '../Popup/Popup';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as auth from '../../utils/auth.js';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(false);

  const navigate = useNavigate();

  // При перезагрузке страницы проверяем наличие токена
  // авторизированного пользователя, чтобы кажды раз не
  // логиниться заново
  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      setLoggedIn(true);
    } else return;
  }
  ////////
  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
    setAuthError(false);
  }

  //Авторизация
  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          closePopup();
          navigate('/user', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setAuthError(true);
      });
  }

  //Выход из профиля
  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/', { replace: true });
    setLoggedIn(false);
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <Header
              openPopup={openPopup}
              loggedIn={loggedIn}
              handleLogout={handleLogout}
            />
            <Main
              openPopup={openPopup}
              loggedIn={loggedIn}
            />
          </>
        } />
        <Route path='/user' element={
          <>
            <Header
              loggedIn={loggedIn}
              handleLogout={handleLogout}
            />
            <ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              handleLogout={handleLogout}
            />
          </>
        } />
        <Route path='/contacts' element={
          <>
            <Header
              loggedIn={loggedIn}
              openPopup={openPopup}
              handleLogout={handleLogout}
            />
            <Contacts />
          </>
        } />
        <Route path="*" element={
          <NotFoundPage />
        } />
      </Routes>
      <Popup
        onLogin={handleLogin}
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        authError={authError}
      />
    </div>
  );
}

export default App;
