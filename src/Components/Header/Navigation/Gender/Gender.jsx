import { NavLink } from 'react-router-dom';
import style from './Gender.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Gender = () => {

  const {activeGender, genderList, categories} = useSelector(state => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map(gender => (
        <li key={gender} className={style.item}>
          <NavLink to={`/catalog/${gender}`} className={({ isActive }) => 
          cn(style.link, (isActive || gender === activeGender) && style.linkActive)}>
            {categories[gender].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Gender;