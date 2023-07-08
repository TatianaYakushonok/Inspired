import { useSelector } from 'react-redux';
import style from './ColorList.module.scss';
import Color from './Color';

const ColorList = ({ colors }) => {

  const { colorsList } = useSelector(state => state.color);
  
  return ( 
    <ul className={style.colorList}>
      {colors.map((id, i) =>{
        const color = colorsList.find(color => color.id === id);
        console.log(color);
        return <Color key={id} color={color?.code} check={!i} />
      })}
    </ul>
  );
}

export default ColorList;