import style from './BtnLike.module.scss';
import cn from 'classnames';
import { ReactComponent as LikeSVG } from '../../assets/img/Heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../features/favoritesSlice';

const BtnLike = ({ id }) => {

  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({id}));
    } else {
      dispatch(addToFavorite({id}));
    }
  }

  return ( 
    <button 
      className={isFavorite ? cn(style.like, style.active) : style.like} 
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToggleFavorites}
    >
      <LikeSVG />
    </button>
  );
}

export default BtnLike;