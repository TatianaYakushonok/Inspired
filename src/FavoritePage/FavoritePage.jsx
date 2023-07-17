import { useDispatch, useSelector } from 'react-redux';
import Goods from '../Components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory } from '../features/goodsSlice.js';
import { usePageFromSearchParams } from '../hooks/usePageFromSearchParams.js';
import style from './FavoritePage.module.scss';

const FavoritePage = () => {

  const dispatch = useDispatch();
  const page = usePageFromSearchParams(dispatch);
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    if(favorites) {
      const param = { list: favorites };
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch])

  return (
    favorites.length ?
    <Goods title='Избраннoe' />
    : 
    <h3 className={style.empty}>Вы ничего не добавили в избранное</h3>
  );
}

export default FavoritePage;