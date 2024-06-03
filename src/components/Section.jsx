


import { motion, useViewportScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div style={{ height: "150vh" }}>
      <motion.div style={{ y }}>
        <h1>Scroll to see the animation</h1>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
