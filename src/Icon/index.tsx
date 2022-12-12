import React from "react";
import classes from "../helpers/classses";
import styles from "./index.module.scss";
interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  className,
  ...restProps
}) => {
  return (
    <>
      <img
        className={classes(styles.muiIcon, className)}
        src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
        alt=""
        {...restProps}
      />
    </>
  );
};

export default Icon;
