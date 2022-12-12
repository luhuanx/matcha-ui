import { HashRouter as Router, Route, Link } from "react-router-dom";

type Nav = {
  key: string;
  label: string;
  children?: Nav[];
};

const tabs: Nav[] = [
  {
    label: "首页",
    key: "home",
  },
  {
    label: "市场",
    key: "product",
  },
  {
    label: "专辑",
    key: "album",
  },
  {
    label: "部落",
    key: "tribe",
  },
  {
    label: "艺术家",
    key: "artist",
  },
  {
    label: "关于我们",
    key: "aboutUs",
  },
  {
    label: "下载APP",
    key: "downloadApp",
  },
];

const Navbar = () => {
  return (
    <>
      <Link to="/">首页</Link>
      <Link to="/introduce">说明</Link>
      <Link to="/start">开始</Link>
      <Link to="/component">组件</Link>
    </>
  );
};

export default Navbar;
