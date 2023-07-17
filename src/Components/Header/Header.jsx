import Navigation from "./Navigation/Navigation";
import Top from "./Top/Top";
import style from './Header.module.scss';
import Search from "../Search/Search";

const Header = () => {
  return ( 
    <header className={style.header}>
      <Top />
      <Search />
      <Navigation />
    </header>
  );
}

export default Header;