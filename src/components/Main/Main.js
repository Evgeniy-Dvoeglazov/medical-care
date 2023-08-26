import './Main.css';
import Intro from '../Intro/Intro';
import CardList from '../CardList/CardList';

function Main(props) {
  return (
    <main className="main">
      <Intro
        title='Место для получения медицинской помощи'
        btnContactsText='Контакты'
        openPopup={props.openPopup}
        loggedIn={props.loggedIn}
      />
      <CardList />
    </main>
  )
}

export default Main;
