import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Contacts from '../Contacts/Contacts';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Popup from '../Popup/Popup';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';




function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);


  function openPopup() {
    setIsPopupOpen(true)
  }

  function closePopup() {
    setIsPopupOpen(false)
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <Header
              openPopup={openPopup}
              isLogin={false}
            />
            <Main openPopup={openPopup} />
          </>
        } />
        <Route path='/user' element={
          <>
            <Header
              isLogin={true}
            />
            <Profile />
          </>
        } />
        <Route path='/contacts' element={
          <>
            <Header
              isLogin={false}
              openPopup={openPopup}
              isContacts={true}
            />
            <Contacts />
          </>
        } />
        <Route path="*" element={
          <NotFoundPage />
        } />
      </Routes>
      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
      />
    </div>
  );
}

export default App;
