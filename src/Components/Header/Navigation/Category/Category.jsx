import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Category = ({ list }) => {

  const { activeGender, categories } = useSelector(state => state.navigation);
  
  return ( 
    <ul className={style.category}>
      {categories[activeGender]?.list?.map(item => (
        <li key={item.slug} className={style.item}>
          <NavLink 
            to={`${activeGender}/${item.slug}`} 
            className={({ isActive }) => cn(style.link, isActive && style.linkActive)}>
              {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Category;