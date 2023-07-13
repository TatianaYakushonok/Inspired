import { isAllOf } from '@reduxjs/toolkit';
import style from './ProductSize.module.scss';
import cn from 'classnames';

const ProductSize = ({ check, size, celectedSize, handleSizeChang }) => {
  //<span className={style.check}></span>
  return ( 
    <div className={style.size}>
      <p className={style.title}>Размер:</p>

      <ul className={style.list}>
        {size?.map(productSize => (
          <li key={productSize} className={style.item}>
            <input className={style.input} 
              type="radio"
              name="size"
              id={productSize}
              value={productSize}
              checked = {celectedSize === productSize}
              onChange={handleSizeChang} 
            />
            <label htmlFor={productSize} className={cn(style.item, style.check)}>{productSize}</label>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ProductSize;