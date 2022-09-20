import Video from "./Video/Video";
import Main from "./Content/Main";
import { FullPage, Slide } from "react-full-page";
import RoadMap from "./RoadMap/RoadMap";
import { useState } from "react";
const About = () => {
  const [isScrollMain, setIsScrollMain] = useState(false);
  return (
    <>
      <FullPage
        afterChange={({ to }) => {
          if (to === 1) {
            setIsScrollMain(true);
          }
        }}
      >
        <Slide>
          <Video />
        </Slide>
        <Slide>
          <Main isScroll={isScrollMain} />
        </Slide>
        <Slide>
          <RoadMap />
        </Slide>
      </FullPage>
    </>
  );
};
export default About;
