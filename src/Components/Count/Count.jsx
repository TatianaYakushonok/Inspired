import cn from 'classnames';
import style from './Count.module.scss';

const Count = ({ classNames, count, handleIncrement, handleDecrement}) => {
  return ( 
    <div className={cn(style.count, classNames)}>
      <button className={style.item} type="button" onClick={handleDecrement}>-</button>
      <span className={cn(style.item, style.number)}>{count}</span>
      <button className={style.item} type="button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Count;