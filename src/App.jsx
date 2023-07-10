import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import BottomTaskBar from "./components/BottomTaskBar";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import Login from "./pages/Loginn";
import MyDetail from "./components/MyDetail";


const AboutME = lazy(() => import("./components/AboutMe"));

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Outlet />
        <MyDetail />
        <Footer />
        <BottomTaskBar />
      </div>
    </Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/aboutme",
        element: (
          <Suspense>
            <AboutME />
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
])



export default App
