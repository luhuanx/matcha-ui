import React from "react";
import styles from "./index.module.css";

const Banner = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.carouse} id="carouse">
          <div className={styles.pic1}>1</div>
          <div className={styles.pic2}>2</div>
          <div className={styles.pic3}>3</div>
          <div className={styles.pic4}>4</div>
          <div className={styles.pic5}>5</div>
          <div className={styles.pic6}>6</div>
          <div className={styles.pic7}>7</div>
          <div className={styles.pic8}>8</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
