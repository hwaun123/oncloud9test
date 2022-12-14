/* eslint-disable default-case */
import { useState } from "react";
import useScrollTitle from "../../Hooks/useScrollTitle";
import img1 from "../../Images/RoadMapImages/roadmap_1_pc.png";
import img2 from "../../Images/RoadMapImages/roadmap_2_pc.png";
import img3 from "../../Images/RoadMapImages/roadmap_3_pc.png";
import img4 from "../../Images/RoadMapImages/roadmap_4_pc.png";
import "./RoadMap.css";
import Point1 from "./RoadPoint/Point1";
import Point2 from "./RoadPoint/Point2";
import Point3 from "./RoadPoint/Point3";
import Point4 from "./RoadPoint/Point4";
const RoadMap = ({ roadmapRef }) => {
  const [num, setNum] = useState(0);

  const closePoint = () => {
    setNum(0);
  };

  const handleClick = () => {
    switch (num) {
      case 1:
        return <Point1 closePoint={closePoint} />;
      case 2:
        return <Point2 closePoint={closePoint} />;
      case 3:
        return <Point3 closePoint={closePoint} />;
      case 4:
        return <Point4 closePoint={closePoint} />;
    }
  };
  const animatedTitle1 = useScrollTitle();
  const animatedTitle2 = useScrollTitle();
  const animatedTitle3 = useScrollTitle();
  const animatedTitle4 = useScrollTitle();
  const animatedTitle5 = useScrollTitle();
  return (
    <>
      <div className="roadmap-container" ref={roadmapRef}>
        <div className="about-title-name">
          <div className="title1" {...animatedTitle1}>
            RO
          </div>
          <div className="title2" {...animatedTitle2}>
            A
          </div>
          <div className="title3" {...animatedTitle3}>
            D
          </div>
          <div className="title4" {...animatedTitle4}>
            MA
          </div>
          <div className="title5" {...animatedTitle5}>
            P
          </div>
        </div>
        <div className="roadmap-map">
          {handleClick()}
          <div className={`roadmap-images ${num ? "show" : ""}`}>
            <div
              onClick={() => {
                setNum(1);
              }}
              className={num === 1 ? "disable" : ""}
            >
              <div className="roadmap-images-title">
                <h1>01</h1>
                <h2>Interoperability & Integration</h2>
              </div>
              <img src={img1} alt="" className="roadmap-img1"></img>
            </div>
            <div
              onClick={() => {
                setNum(2);
              }}
              className={num === 2 ? "disable" : ""}
            >
              <div className="roadmap-images-title">
                <h1>02</h1>
                <h2>Launchpad</h2>
              </div>
              <img src={img2} alt="" className="roadmap-img2"></img>
            </div>
            <div
              onClick={() => {
                setNum(3);
              }}
              className={num === 3 ? "disable" : ""}
            >
              <div className="roadmap-images-title">
                <h1>03</h1>
                <h2>Holder Benefits</h2>
              </div>
              <img src={img3} alt="" className="roadmap-img3"></img>
            </div>
            <div>
              <div className="roadmap-images-title">
                <h1>04</h1>
                <h2>Coming Soon</h2>
              </div>
              <img src={img4} alt="" className="roadmap-img4"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
