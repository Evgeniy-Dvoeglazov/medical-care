import './Popup.css'

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Popup(props) {

  const { register, formState: { errors, isValid }, getValues, reset } = useForm({ mode: 'onChange', criteriaMode: 'all' });

  const errorClassname = (name) => `popup__error ${errors[name] ? 'popup__error_visible' : ''}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getValues('login') || !getValues('password')) {
      return;
    }
    props.onLogin(getValues('login'), getValues('password'));
    props.closePopup();
    reset();
  }

  useEffect(() => {
    function ClosePopupOnEsc(evt) {
      if ((evt.key === 'Escape') && props.isPopupOpen) {
        props.closePopup();
        reset();
      }
    }
    if (props.isPopupOpen) {
      document.addEventListener('keydown', ClosePopupOnEsc);

      return () => {
        document.removeEventListener('keydown', ClosePopupOnEsc);
      };
    }
  });

  useEffect(() => {
    function ClosePopupOnOverlay(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        props.closePopup();
        reset();
      }
    }
    if (props.isPopupOpen) {
      document.addEventListener('mousedown', ClosePopupOnOverlay);

      return () => {
        document.removeEventListener('mousedown', ClosePopupOnOverlay);
      };
    }
  });

  function handleClosePopupBtn() {
    props.closePopup();
    reset();
  }

  return (
    <div className={`popup ${props.isPopupOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>Авторизация</h2>
        <form className='popup__form' name='form' onSubmit={handleSubmit} noValidate>
          <input className='popup__input' name='login' type='email' placeholder='Email'
            {...register('login', {
              required: 'Заполните это поле',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Введите Email'
              }
            })}
          />
          {errors.login && <span className={errorClassname('login')}>{errors.login.message}</span>}
          <input className='popup__input' name='password' type='password' placeholder='Пароль'
            {...register('password', {
              required: 'Заполните это поле',
              minLength: {
                value: 8,
                message: 'Пароль должен быть не короче 8 символов'
              }
            })}
          />
          {errors.password && <span className={errorClassname('password')}>{errors.password.message}</span>}
          <button className={`popup__submitBtn ${isValid ? '' : 'popup__submitBtn_disabled'}`} type='submit'>Войти</button>
        </form>
        <button className='popup__closeBtn' type='button'
          aria-label='Кнопка закрытия формы' onClick={handleClosePopupBtn}></button>
      </div>
    </div>
  );
}

export default Popup;
