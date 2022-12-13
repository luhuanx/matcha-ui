import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-bg"></div>
        <div className="text">
          <div className="title">matcha-ui</div>
          <div className="intro">
            助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～
          </div>
          <Link to="/start">
            <div className="toStart">
              <span>开始使用</span>
              <img src={`${process.env.PUBLIC_URL}/icons/arrow.svg`} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="item">
          <img src={`${process.env.PUBLIC_URL}/icons/react.svg`} alt="" />
          <div className="detail">
            <div className="lineOne">基于React</div>
            <div className="lineTwo">基于React的PC端组件库</div>
          </div>
        </div>
        <div className="item">
          <img src={`${process.env.PUBLIC_URL}/icons/typescript.svg`} alt="" />
          <div className="detail">
            <div className="lineOne">使用 TypeScript</div>
            <div className="lineTwo">有效增强了代码的健壮性</div>
          </div>
        </div>
        <div className="item">
          <img src={`${process.env.PUBLIC_URL}/icons/lighting.svg`} alt="" />
          <div className="detail">
            <div className="lineOne">代码易读</div>
            <div className="lineTwo">每个组件的源码都极其简洁</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
