import React from "react";
import classes from "../../helpers/classses";
import "./index.scss";
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
        className={classes("mui-icon", className)}
        src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
        alt={name}
        {...restProps}
      />
    </>
  );
};

export default Icon;
