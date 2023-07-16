import Container from "../../Layout/Container/Container";
import style from './Top.module.scss';
import cn from 'classnames';
import logo from '../../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSVG } from '../../../assets/img/Heart.svg';
import { ReactComponent as CartSVG } from '../../../assets/img/cart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/img/search.svg';
import { useSelector } from "react-redux";

const Top = () => {

  const { countItems } = useSelector(state => state.cart);

  return ( 
    <div className={style.top}>
      <Container className={style.topContainer}>
        <a href="tel:89304902620" className={cn(style.topLink, style.topPhone)}>8 930 490 26 20</a>

        <NavLink to="/" className={style.topLogo}>
          <img src={logo} alt="Logo" />
        </NavLink>

        <div className={style.topNavigation}>
          <ul className={style.topNavList}>
            <li className={style.navItem}>
              <button className={style.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li className={style.navItem}>
              <NavLink to="/cart" className={style.topLink}>
                <span className={style.topLinkCount}>{countItems}</span>
                <CartSVG />
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/favorite" className={cn(style.topLink, style.like)}>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Top;