import './Profile.css';
import Intro from '../Intro/Intro'

function Profile(props) {

  const userName = localStorage.getItem('userName');

  return (
    <section className='profile'>
      <Intro
        loggedIn={props.loggedIn}
        handleLogout={props.handleLogout}
        title={`Привет, ${userName}`}
        page='user'
      />
    </section>
  )
}

export default Profile;
