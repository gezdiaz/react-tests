import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Calculator from "./Calculator";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import User, { loader as userLoader } from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/default-app",
        element: <App />,
      },
      {
        path: "/user/:userId",
        element: <User />,
        loader: userLoader,
      },
    ],
  },
]);

const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Router;
