import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

export const list = [
  {link: 'women', title: 'Женщины', categories: [
    {link: 'bras', title: 'Бустгалтеры'},
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
    {link: 'pijamas', title: 'Пижамы'},
  ]},
  {link: 'men', title: 'Мужчины', categories: [
    {link: 'panties', title: 'Трусы'},
    {link: 'socks', title: 'Носки'},
    {link: 'bathrobes', title: 'Халаты'},
    {link: 'thermal', title: 'Термобелье'},
  ]}
]

const Category = () => {
  return ( 
    <div className={style.category}>

      <h3 className={cn(style.title, style.categoryTitle)}>каталог</h3>

        <ul className={style.categoryList}>

          {list.map(item => (
            <li key={item.link} className={style.categoryItem}>
          
              <h4 className={style.categorySubtitle}>
                <NavLink to={item.link} className={style.link}>{item.title}</NavLink>
              </h4>

              <ul className={style.categorySublist}>
                {item.categories.map(category => (
                  <li key={category.link}>
                    <NavLink to={`${item.link}/${category.link}`} className={style.link}>
                      {category.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}

        </ul>
    </div>
  );
}

export default Category;