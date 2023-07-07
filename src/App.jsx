import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
//import Footer from "./Components/Footer/Footer";
//import Header from "./Components/Header/Header";
import Root from "./routes/Root";
import MainPage from "./MainPage/MainPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='women' element={<MainPage gender="women" />} />
      <Route path='men' element={<MainPage gender="men" />} />
      <Route path='women/:category' element={<MainPage gender="women" />} />
      <Route path='men/:category' element={<MainPage gender="men" />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

const App = () => {
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchNavigation());
  }, [dispach]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
