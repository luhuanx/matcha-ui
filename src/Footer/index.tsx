import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>
        <img src={`${process.env.PUBLIC_URL}/icons/heart.svg`}></img>Made by
        huanxlu
      </span>
    </div>
  );
};

export default Footer;
