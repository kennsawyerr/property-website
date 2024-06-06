// import { useEffect, useRef } from "react";
// const Demo = () => {
//   const observer = useRef(null);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-in");
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.4,
//     };

//     const callbacks = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("active");
//         }
//       });
//     };

//     observer.current = new IntersectionObserver(callbacks, options);

//     elements.forEach((element) => {
//       observer.current.observe(element);
//     });

//     return () => {
//       observer.current.disconnect(); // Clean up the observer when component unmounts
//     };
//   }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

//   return (
//     <>
//       <div className="fade-in">hi</div>
//       <div className="fade-in">box 2</div>
//       {/* <div className="fade-in">box 3</div>
//       <div className="fade-in">box 4</div> */}
//     </>
//   );
// };

// export default Demo;

// /*  const elements = document.querySelectorAll('.fade-in');
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: .4
// }
// const callbacks = (entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting){
//       entry.target.classList.add('active');
//     }
//   });
// }
// let observer = new IntersectionObserver(callbacks, options);
// elements.forEach(element => {
//   observer.observe(element);
// }); */

import { motion } from "framer-motion";
const Demo = () => {
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

export default Demo;
