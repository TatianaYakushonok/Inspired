import { NavLink } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';

const list = [
  {link: 'women', title: 'Женщины'},
  {link: 'men', title: 'Мужчины'}
]

const Gender = () => {
  return ( 
    <ul className={style.gender}>
      {list.map(item => (
        <li key={item.link} className={style.item}>
          <NavLink to={item.link} className={({ isActive }) => cn(style.link, isActive && style.linkActive)}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Gender;