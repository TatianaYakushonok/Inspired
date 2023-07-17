import Navigation from "./Navigation/Navigation";
import Top from "./Top/Top";
import style from './Header.module.scss';
import Search from "../Search/Search";
import { useState } from "react";

const Header = () => {
  //const [ openSearch, setOpenSearch ] = useState(false);
  return ( 
    <header className={style.header}>
      <Top />
      <Search />
      <Navigation />
    </header>
  );
}

export default Header;