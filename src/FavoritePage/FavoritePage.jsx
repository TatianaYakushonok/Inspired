import { useDispatch, useSelector } from 'react-redux';
import Goods from '../Components/Goods/Goods';
import style from './FavoritePage.module.scss';
import { useEffect } from 'react';
import { fetchCategory } from '../features/goodsSlice';

const FavoritePage = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchCategory({list: favorites}))
  }, [favorites, dispatch])

  return (
    <>
      <Goods title='Избранные товары' />
    </>
  );
}

export default FavoritePage;