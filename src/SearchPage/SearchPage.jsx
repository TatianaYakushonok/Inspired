import { useDispatch, useSelector } from 'react-redux';
import style from './SearchPage.module.scss';
import { useEffect } from 'react';
import { fetchAll } from '../features/goodsSlice';
import { useSearchParams } from 'react-router-dom';
import Goods from '../Components/Goods/Goods';

const SearchPage = () => {

  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);
  let [ searchParams ] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q');
    const params = { search };
    dispatch(fetchAll(params));
  }, [searchParams, dispatch]);
  
  return ( 
    goodsList.length ?
    <Goods title='Результат поиска' /> 
    :
    <h3 className={style.empty}>Ничего не найдено по вашему запросу</h3>
  );
}

export default SearchPage;