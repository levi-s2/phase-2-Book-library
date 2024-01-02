import App from "./App";
import Favorites from "./Favorites";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Books from "./Books";
import Request from "./Request";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/Books",
            element: <Books />
          },
          {
            path: "/Request",
            element: <Request />
          },
          {
            path: "/Favorites",
            element: <Favorites />
          },
          {
            path: "/About",
            element: <About />
          }
        ]
      }
]

export default routes