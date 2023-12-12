import Home from "./Home";
import Books from "./Books";
import Request from "./Request";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Books",
        element: <Books />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Request",
        element: <Request />,
        errorElement: <ErrorPage />
      }
]

export default routes