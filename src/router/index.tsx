import Home from "../pages/Home";
import Icon from "../pages/Icon";

const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/introduce",
    element: <Icon name="qq" />,
  },
  {
    path: "/start",
    element: <Icon name="qq" />,
  },
  {
    path: "/component",
    element: <Icon name="qq" />,
  },
];

export default route;
