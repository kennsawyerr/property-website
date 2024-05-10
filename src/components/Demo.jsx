import { useEffect, useRef } from "react";
const Demo = () => {
  const observer = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const callbacks = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    observer.current = new IntersectionObserver(callbacks, options);

    elements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      observer.current.disconnect(); // Clean up the observer when component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <>
      <div className="fade-in">hi</div>
      <div className="fade-in">box 2</div>
      {/* <div className="fade-in">box 3</div>
      <div className="fade-in">box 4</div> */}
    </>
  );
};

export default Demo;

/*  const elements = document.querySelectorAll('.fade-in');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
}); */
