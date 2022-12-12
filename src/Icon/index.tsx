import React from "react";
import wechat from "../icons/wechat.svg";
import alipay from "../icons/alipay.svg";
import qq from "../icons/qq.svg";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name }) => {
  return (
    <>
      {name === "wechat" && <img src={wechat} alt="wechat" />}
      {name === "alipay" && <img src={alipay} alt="alipay" />}
      {name === "qq" && <img src={qq} alt="qq" />}
    </>
  );
};

export default Icon;
