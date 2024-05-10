import { useState , useEffect} from "react";

import { HiOutlineArrowDown } from "react-icons/hi2";
import { FaArrowAltCircleUp } from "react-icons/fa";
useState;

//animation

// import "aos/dist/aos.css";


//animation
import AOS from "aos";
import "aos/dist/aos.css";

const CircularSlide = ({herotext}) => {
    useEffect(() => {
    AOS.init();
  }, []);
  const [animationCompleted, setAnimationCompleted] = useState(false);


  const handleAnimationEnd = () => {
    setAnimationCompleted(true);
  };

  return (
    <>
      <div className="black-contain" onAnimationEnd={handleAnimationEnd}>
        <div className="circle">
          <FaArrowAltCircleUp />
        </div>
        {animationCompleted && (
          <div className="others">
            <div className="down-arrow">
              <HiOutlineArrowDown />
            </div>
            <div className="text">
              <p className="p">{herotext}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CircularSlide;
