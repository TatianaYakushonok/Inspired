import { useDispatch, useSelector } from 'react-redux';
import Container from '../Layout/Container/Container';
import style from './Search.module.scss';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toggleSearch } from '../../features/searchSlice';

const Search = () => {

  const { openSearch } = useSelector(state => state.search);
  const initialValues = {
    search: '',
  }

  const validationSchema = Yup.object({
    search: Yup.string().required('Поле обязательно для заполнения'),
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = ({ search }, { resetForm }) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
      dispatch(toggleSearch(search));
    }
  }

  return ( 
    openSearch && 
    <div className={style.serach}>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={style.form}>
            <Field 
              className={style.input} 
              type='search' 
              name='search' 
              placeholder='Найти...'
            />

            <ErrorMessage className={style.error} name='search' component={'p'} />

            <button className={style.btn} type='submit'>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}

export default Search;