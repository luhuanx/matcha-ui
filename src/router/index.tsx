import Home from "../pages/Home";
import Icon from "../pages/Icon";
import WaterFall from "../pages/WaterFall";

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
    element: <WaterFall />,
  },
  {
    path: "/start",
    element: <Icon name="wechat" />,
  },
  {
    path: "/component",
    element: <Icon name="alipay" />,
  },
];

export default route;
