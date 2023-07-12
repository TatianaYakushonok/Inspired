import { isAllOf } from '@reduxjs/toolkit';
import style from './ProductSize.module.scss';
import cn from 'classnames';

const ProductSize = ({ check, size, celectedSize, handleSizeChang }) => {
  //<span className={style.check}></span>
  return ( 
    <div className={style.size}>
      <h2 className={style.title}>Размер:</h2>

      <ul className={style.list}>
        {size?.map(productSize => (
          <li key={productSize} className={style.item}>
            <input className={style.input} 
              type="radio"
              name="size"
              id={productSize}
              value={productSize}
              checked = {check ? celectedSize === productSize : check}
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