import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart/Cart';
import Order from './Order/Order';
import { useEffect, useState } from 'react';
import { fetchAll } from '../features/goodsSlice';

const CartPage = () => {

  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state=> state.goods);
  const [ count, setCount ] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({list: cartItems.map(item => item.id)}));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch]);

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      <Order cartItems={cartItems} />
    </>
  );
}

export default CartPage;