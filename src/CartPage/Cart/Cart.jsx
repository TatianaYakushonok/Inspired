import { useState } from 'react';
import style from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import Container from '../../Components/Layout/Container/Container';

const Cart = ({ cartItems, goodsList }) => {
  
  let totalPrice = 0;

  cartItems.map(itemCart => {
    goodsList.map(itemGoods => {
      if (itemCart.id === itemGoods.id) {
        return totalPrice += itemGoods.price;
      }
    })
  });

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>
        {goodsList.length ? 
          <ul className={style.list}>
            {cartItems.map(item => (
              <li key={`${item.id}-${item.color}-${item.size}`} className={style.item}>
                <CartItem {...item} goodsList={goodsList} />
              </li>
            ))}
          </ul>
          : <h3>В корзине пусто</h3>
        }

        <div className={style.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Cart;