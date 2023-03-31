import Macy from "macy";
import { useEffect, useState } from "react";
import "./index.scss";

const WaterFall = () => {
  const [dataImages, setDataImages] = useState([]);
  const [masonry, setMasonry] = useState({});

  const getMacy = () => {
    if (masonry) {
      // masonry.reInit();
    } else {
      let masonry = new Macy({
        container: ".macy-container", // 图像列表容器
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        margin: { x: 10, y: 15 }, // 设计列与列的间距
        columns: 2, // 设置列数
      });
      setMasonry({ masonry });
    }
  };

  useEffect(() => {
    getMacy();
  });

  return (
    <div className="macy-container">
      <img
        src="https://i.328888.xyz/2022/12/26/DJlrz.gif"
        alt=""
        className="img_item"
      />
    </div>
  );
};

export default WaterFall;
