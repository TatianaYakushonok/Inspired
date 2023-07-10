import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./routes/Root";
import MainPage from "./MainPage/MainPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColor } from "./features/colorSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='catalog/:gender/:category?' element={<MainPage />} />
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
