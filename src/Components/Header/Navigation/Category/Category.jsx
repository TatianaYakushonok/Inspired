import { NavLink, useLocation } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

const Category = ({ list }) => {
  return ( 
    <ul className={style.category}>
      {list.map(item => (
        item.categories.map(category => (
          <li key={category.link} className={style.item}>
            <NavLink to={`${item.link}/${category.link}`} className={({ isActive }) => cn(style.link, isActive && style.linkActive)}>{category.title}</NavLink>
          </li>
        ))
      ))}
    </ul>
  );
}

export default Category;