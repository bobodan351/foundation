import { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Start counting
  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default Counter;