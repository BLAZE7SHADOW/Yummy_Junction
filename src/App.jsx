
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
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
      // {
      //   path: "/contact",
      //   element: <Contact />
      // },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
])



export default App
