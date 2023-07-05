import style from './Category.module.scss';
import cn from 'classnames';

const Category = () => {
  return ( 
    <div className={style.category}>

      <h3 className={cn(style.title, style.categoryTitle)}>каталог</h3>

      <div className={style.categoryList}>

        <ul className={style.categorySublist}>

          <h4 className={style.categorySubtitle}>
            Женщины
          </h4>

          <li><a href="#!" className={style.link}>Бюстгальтеры</a></li>
          <li><a href="#!" className={style.link}>Трусы</a></li>
          <li><a href="#!" className={style.link}>Носки</a></li>
          <li><a href="#!" className={style.link}>Халаты</a></li>
          <li><a href="#!" className={style.link}>Термобелье</a></li>
          <li><a href="#!" className={style.link}>Пижамы</a></li>
        </ul>

        <ul className={style.categorySublist}>

          <h4 className={style.categorySubtitle}>
            Мужчины
          </h4>
          
          <li><a href="#!" className={style.link}>Трусы</a></li>
          <li><a href="#!" className={style.link}>Носки</a></li>
          <li><a href="#!" className={style.link}>Халаты</a></li>
          <li><a href="#!" className={style.link}>Термобелье</a></li>
        </ul>

      </div>

    </div>
  );
}

export default Category;