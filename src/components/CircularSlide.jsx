import { motion } from "framer-motion";
const CircularSlide = () => {
  return (
    <>
      <div className="container">
        <motion.div
          className="yellow-bg"
          whileInView={{
            width: 600,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        >
          <motion.div
            className="ballistic-ball"
            whileInView={{
              x: 500,
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
