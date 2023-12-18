import Home from "./Home";
import Favorites from "./Favorites";
import About from "./About";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Favorites",
        element: <Favorites />,
        errorElement: <ErrorPage />
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <ErrorPage />
      }
]

export default routes