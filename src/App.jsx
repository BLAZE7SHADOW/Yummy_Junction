import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import AboutMe from "./components/AboutMe";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import Login from "./pages/login";
import BottomTaskBar from "./components/BottomTaskBar";
import Footer from "./components/Footer";


const AboutME = lazy(() => import("./components/AboutMe"));

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Outlet />
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
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
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
