import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Category = () => {

  const { genderList, categories } = useSelector(state => state.navigation);

  return ( 
    <div className={style.category}>

      <h3 className={cn(style.title, style.categoryTitle)}>каталог</h3>

        <ul className={style.categoryList}>

          {genderList.map(gender => (
            <li key={gender} className={style.categoryItem}>
          
              <h4 className={style.categorySubtitle}>
                <NavLink to={`/catalog/${gender}`} className={style.link}>{categories[gender].title}</NavLink>
              </h4>

              <ul className={style.categorySublist}>
                {categories[gender]?.list?.map(category => (
                  <li key={category.slug}>
                    <NavLink to={`/catalog/${gender}/${category.slug}`} className={style.link}>
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