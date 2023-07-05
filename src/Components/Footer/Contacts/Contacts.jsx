import style from './Contacts.module.scss';

const Contacts = () => {
  return ( 
    <div className={style.contacts}>
      <a href="mailto:Inspired@gmail.com" className={style.link}>Inspired@gmail.com</a>
      <a href="tel:89304902620" className={style.link}>8 930 490 26 20</a>
    </div>
  );
}

export default Contacts;