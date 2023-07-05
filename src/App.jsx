
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Instamart from "./components/Instamart";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import Login from "./pages/login";
import BottomTaskBar from "./components/BottomTaskBar";
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Outlet />

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
        path: "/instamart",
        element: <Instamart />
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
