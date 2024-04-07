import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Create from "./pages/Create";
import SingleRecept from "./pages/SingleRecept";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/singleRecept/:id",
          element: <SingleRecept />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
