import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopPage from "../pages/TopPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
