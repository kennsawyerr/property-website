import { useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { FaArrowAltCircleUp } from "react-icons/fa";
useState;

//animation

// import "aos/dist/aos.css";

//animation
// import AOS from "aos";
// import "aos/dist/aos.css";

const CircularSlide = ({ herotext }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);
  //   useEffect(() => {
  //   AOS.init();
  // }, []);
  // const [animationCompleted, setAnimationCompleted] = useState(false);

  // const handleAnimationEnd = () => {
  //   setAnimationCompleted(true);
  // };

  return (
    <>
      <div className="black-contain">
        <div className="circle">
          <FaArrowAltCircleUp />
        </div>

        <div className="others" style={{ x }}>
          <div className="down-arrow">
            <HiOutlineArrowDown />
          </div>
          <div className="text">
            <p className="p">{herotext}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularSlide;
