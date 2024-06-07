import { motion } from "framer-motion";
const CircularSlideInvert = ({ ballWidth, ballSizeX, ballCont, ballImg }) => {
  return (
    <>
      <div className="container">
        <motion.div
          style={{
            width: ballSizeX ? ballSizeX : 100,
            height: ballSizeX ? ballSizeX : 100,
            borderRadius: ballSizeX ? ballSizeX : 100,
            backgroundColor: ballCont ? ballCont : "white",
          }}
          className="yellow-bg"
          whileInView={{
            width: ballWidth ? ballWidth + ballSizeX : -500,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        >
          <motion.div
            style={{
              width: ballSizeX ? ballSizeX : 100,
              height: ballSizeX ? ballSizeX : 100,
              backgroundImage: `url(${ballImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="ballistic-ball"
            whileInView={{
              x: ballWidth,
              scale: [1, 1, 1, 1, 1],
              rotate: [180, 180, 180, 180, 180],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
              // times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default CircularSlideInvert;
