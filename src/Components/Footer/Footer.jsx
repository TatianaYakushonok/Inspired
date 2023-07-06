import style from './Footer.module.scss';
import Container from '../Layout/Container/Container';
import Category from './Category/Category';
import Social from './Social/Social';
import Contacts from './Contacts/Contacts';
import Copyright from './Copyright/Copyright';
import Development from './Development/Development';

const Footer = ({ list }) => {
  return ( 
    <footer>
      <Container className={style.container}>

        <div className={style.footerContainer}>

          <Category list={list} />
          <Social />
          <Contacts />
          <Copyright />
          <Development />

        </div>

      </Container>
    </footer>
  );
}

export default Footer;