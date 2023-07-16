import { useEffect, useState } from 'react';
import Container from '../Components/Layout/Container/Container';
import style from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../features/productSlice';
import { API_URL } from '../const';
import cn from 'classnames';
import ColorList from '../Components/ColorList/ColorList';
import ProductSize from '../Components/ProductSize/ProductSize';
import Count from '../Components/Count/Count';
import Goods from '../Components/Goods/Goods';
import { fetchCategory } from '../features/goodsSlice';
import BtnLike from '../Components/BtnLike/BtnLike';
import { addToCart } from '../features/cartSlice';

const ProductPage = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(state => state.product);
  const { gender, category, colors } = product;
  const { colorsList } = useSelector(state => state.color);
  const [ count, setCount ] = useState(1);
  const [ celectedColor, setSelectedColor] = useState('');
  const [ celectedSize, setSelectedSize] = useState('');

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const handleColorChang = (e) => {
    setSelectedColor(e.target.value);
  }

  const handleSizeChang = (e) => {
    setSelectedSize(e.target.value);
  }

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory({ gender, category, count: 4, top: true, exclude: id }));
  }, [gender, category, id, dispatch]);

  useEffect(() => {
    if (colorsList?.length && colors?.length) {
      setSelectedColor(colorsList.find(color => color.id === colors[0].title));
    }
  }, [colorsList, colors]);

  return (
    <>
      <section className={style.card}>
        <Container className={style.container}>

          <img className={style.image} src={`${API_URL}/${product.pic}`} alt={product.title} />

          <form 
            action="#" 
            className={style.content} 
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addToCart({
                id, 
                color: celectedColor, 
                size: celectedSize, 
                count}))
            }}>
            <h2 className={style.title}>{product.title}</h2>
            <p className={style.price}>руб {product.price}</p>

            <div className={style.vendorCode}>
              <span className={style.subtitle}>Артикул:</span>
              <span className={style.id}>{product.id}</span>
            </div>

            <div className={style.color}>
              <p className={cn(style.subtitle, style.colorTitle)}>Цвет:</p>
              <ColorList 
                colors={colors} 
                celectedColor={celectedColor} 
                handleColorChang={handleColorChang}
              />
            </div>

            <ProductSize size={product.size}
                        check={product.size}
                        celectedSize={celectedSize}
                        handleSizeChang={handleSizeChang} 
            />

            <div className={style.description}>
              <p className={cn(style.subtitle, style.descriptionTitle)}>Описание:</p>
              <p className={style.descriptionText}>{product.description}</p>
            </div>

            <div className={style.control}>

              <Count className={style.count}
                    count={count}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
              />

              <button className={style.addCart} type="submit">В корзину</button>
              <BtnLike id={id} />
            </div>

          </form>
        </Container>
      </section>
      <Goods title='Вам также может понравиться' />
    </> 
  );
}

export default ProductPage;