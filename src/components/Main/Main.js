import './Main.css';
import Intro from '../Intro/Intro';
import CardList from '../CardList/CardList';

function Main(props) {
  return (
    <main className="main">
      <Intro
        title='Место для получения медицинской помощи'
        btnLoginText='Войти'
        btnContactsText='Контакты'
        openPopup={props.openPopup}
      />
      <CardList />
    </main>
  )
}

export default Main;
