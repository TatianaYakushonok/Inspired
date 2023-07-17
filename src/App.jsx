import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./routes/Root";
import MainPage from "./MainPage/MainPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import FavoritePage from "./FavoritePage/FavoritePage";
import CartPage from "./CartPage/CartPage";
import SearchPage from "./SearchPage/SearchPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColor } from "./features/colorSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/catalog/:gender/:category?' element={<MainPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColor());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
