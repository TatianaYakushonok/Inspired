import style from './Color.module.scss';

const Color = ({ color }) => {
  return (
    <li className={style.color}>{color}</li>
  );
}

export default Color;