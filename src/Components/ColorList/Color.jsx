import style from './Color.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const Color = ({ color, check }) => {

  const bgColor = { "--data-color": color};

  return (
    <li key={color}
      style={bgColor} 
      check={check.toString()}>
        <NavLink to={color}
                className={({ isActive }) => cn(style.color, (isActive && check) && style.colorCheck)}>
        </NavLink>
    </li>
  );
}

export default Color;