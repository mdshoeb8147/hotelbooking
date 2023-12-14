import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Hotel from "./pages/Hotel/Hotel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hotels",
    element: <List />,
  },
  {
    path: "/hotels/:id",
    element: <Hotel />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
