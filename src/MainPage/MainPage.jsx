import { useParams } from 'react-router-dom';
import style from './MainPage.module.scss';
import Container from '../Components/Layout/Container/Container';

const MainPage = ({ gender = 'women' }) => {

  const { category } = useParams();
  return (
    <Container>
      <div>MainPage {gender}</div>
      {category && <p>Категория: { category }</p>}
    </Container>
  )
};

export default MainPage;