import Algorithm from "../pages/Algorithm/Algorithm";
import Frontend from "../pages/FrontEnd/Frontend";
import Home from "../pages/Home/Home";

const routerPath = {
  home: "/",
  algorithm: "/algorithm",
  frontend: "/frontend",
};
const routes = [
  {
    name: "Home",
    path: routerPath.home,
    element: <Home />,
    exact: true,
  },
  {
    name: "algorithm",
    path: routerPath.algorithm,
    element: <Algorithm />,
  },
  {
    name: "frontend",
    path: routerPath.frontend,
    element: <Frontend />,
  },
];
export default routes;
