import { useDispatch, useSelector } from 'react-redux';
import style from './SearchPage.module.scss';
import { useEffect } from 'react';
import { fetchAll } from '../features/goodsSlice';

const SearchPage = () => {

  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchAll({ q: goodsList}))
  }, [goodsList, dispatch]);
  
  return ( 
    <></>
  );
}

export default SearchPage;