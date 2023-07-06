import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Layout/Main/Main";

export const list = [
  {link: 'women', title: 'Женщины', categories: [
    {link: 'bras', title: 'Бустгалтеры'},
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
    {link: 'pijamas', title: 'Пижамы'},
  ]},
  {link: 'men', title: 'Мужчины', categories: [
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
  ]}
]

const Root = () => {
  return ( 
    <>
      <Header list={list}/>
      <Main>
        <Outlet />
      </Main>
      <Footer list={list}/>
    </>
  );
}

export default Root;