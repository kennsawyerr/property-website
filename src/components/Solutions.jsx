import CircularSlide from "./CircularSlide";
import alSufouh from "../assets/images/alSufouh.jpg"
// import { useScroll, useTransform } from "framer-motion";
// import { Title } from "./style";
import CircularSlideInvert from "./CircularSlideInvert";

const Solutions = () => {
  // const { scrollYProgress } = useScroll();

  // const x = useTransform(scrollYProgress, [0, 1], [0, 600]);
   
  return (
    <>
      <div className="black-bg">
        <div className="textcont">
          <h1>Tailored Solutions for Your Real Estate Needs</h1>
        </div>
        <div className="hero-imgcont">
          <CircularSlide ballWidth={100} ballSizeX={50}  ballImg={alSufouh}/>
          <CircularSlideInvert ballWidth={100} ballSizeX={50} ballImg={alSufouh}/>
        </div>

        <div className="overflow-hidden">
          {/* <Title style={{ x }}>We sell furniture</Title> */}
        </div>
      </div>
    </>
  );
};

export default Solutions;
