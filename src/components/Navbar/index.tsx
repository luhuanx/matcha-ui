import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link to="/home">
        <div className={styles.logo}>
          <img
            className={styles.logoImg}
            src={`${process.env.PUBLIC_URL}/leaf.svg`}
            alt="logo"
          />
          <span>matcha-ui</span>
        </div>
      </Link>

      <div className={styles.tab}>
        <Link className={styles.item} to="/introduce">
          官方文档
        </Link>
        <Link className={styles.item} to="/start">
          快速上手
        </Link>
        <Link className={styles.item} to="/component">
          组件列表
        </Link>
        <Link className={styles.item} to="/style">
          主题颜色
        </Link>
        <a
          target="_blank"
          href="https://github.com/luhuanx/matcha-ui"
          className={styles.item}
          rel="noreferrer"
        >
          <img
            className={styles.github}
            src={`${process.env.PUBLIC_URL}/icons/github.svg`}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
