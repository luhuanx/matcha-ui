import React from "react";
import styles from "./index.module.scss";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name }) => {
  return (
    <>
      <img
        className={styles.muiIcon}
        src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
        alt=""
      />
    </>
  );
};

export default Icon;
