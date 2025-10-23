import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopPage from "../pages/TopPage";
import Home from "../pages/Home";
import { AnalysisCompany } from "../pages/AnalysisCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/analysis-company",
    element: <AnalysisCompany />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
