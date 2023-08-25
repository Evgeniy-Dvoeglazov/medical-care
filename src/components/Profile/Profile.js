import './Profile.css';
import Intro from '../Intro/Intro'

function Profile() {
  return (
    <section className='profile'>
      <Intro
        title={`Привет`}
        btnLoginText='Выйти из аккаунта'
        btnContactsText='Перейти в контакты'
        isLogin={true}
      />
    </section>
  )
}

export default Profile;
