import style from './ColorLable.module.scss';
import cn from 'classnames';

const ColorLable = ({ color, check, celectedColor, handleColorChang }) => {

  const colorCode = color?.code;
  const bgColor = { "--data-color": colorCode};

  return (
    <label 
      className={style.color} 
      style={bgColor}>
      <input className={style.input} 
            type="radio"
            name="color"
            value={color?.title}
            checked = {celectedColor ? celectedColor === color?.title : check}
            onChange={handleColorChang} />
      <span className={style.colorCheck}></span>
    </label>
  );
}

export default ColorLable;