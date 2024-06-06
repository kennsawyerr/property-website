import { motion } from "framer-motion";
const CircularSlide = ({ ballWidth, ballSizeX }) => {
  return (
    <>
      <div className="container">
        <motion.div
          style={{
            width: ballSizeX ? ballSizeX : 100,
            height: ballSizeX ? ballSizeX : 100,
            borderRadius: ballSizeX ? ballSizeX : 100,
          }}
          className="yellow-bg"
          whileInView={{
            width: ballWidth ? ballWidth + ballSizeX : 500,
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

export default CircularSlide;
