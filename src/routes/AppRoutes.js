import Home from "../pages/Home";
import Signup from "../pages/Signup";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export default AppRoutes;
