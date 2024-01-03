import App from "./App";
import Favorites from "./Favorites";
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
              path: "/",
              element: <Books />
          }, 
          {
              path: "/Request",
              element: <Request />
          },
          {
              path: "/Favorites",
              element: <Favorites />
          }
      ]
  }
];

export default routes