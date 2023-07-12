import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';
import Color from './Color';
import ColorLable from './ColorLable';

const ColorList = ({ colors, celectedColor, handleColorChang }) => {

  const { colorsList } = useSelector(state => state.color);
  
  return handleColorChang 
    ? (
    <div className={style.colorList}>
      {colors?.map((id, i) =>{
        const color = colorsList.find(color => color.id === id);
        return <ColorLable 
                  key={id} 
                  color={color} 
                  check={!i}
                  celectedColor={celectedColor}
                  handleColorChang={handleColorChang} />
      })}
    </div>
    ) 
    : ( 
    <ul className={style.colorList}>
      {colors.map((id, i) =>{
        const color = colorsList.find(color => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />
      })}
    </ul>
  );
}

export default ColorList;