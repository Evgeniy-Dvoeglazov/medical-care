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
import { CurrentUserContext } from '../../context/CurrentUserContext';




function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const [users, setUsers] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const url = "http://localhost:8000/users";

  //   const fetchData = async () => {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setUsers(json);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      setLoggedIn(true);
      navigate('/user', { replace: true });
    } else return;
  }


  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          navigate('/user', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/', { replace: true });
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              <Profile
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
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
