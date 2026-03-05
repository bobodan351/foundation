import React from "react";
import { useState, useEffect } from "react";
import childimg from "./images/picture1.webp";
import secChild from "./images/picture2.jpg";
import thdChild from "./images/IMG_2792 (1).JPG";


const SlideShow = () => {
	const slides = [childimg, secChild, thdChild];
	const [current, setCurrent] = useState(0);
	  const text = "A Beacon of Hope for Future Generations.";
  const [title, setTitle] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTitle(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <section>
      <div className="slideshow">
        {/* Slides */}
        <img src={slides[current]} alt="slide" className="slide-img" />
			  <div className="overlay-slides">
				  <h1 className="slides-title">{title}</h1>
				  <p className="slides-text">"Education is the most powerful weapon which you can use to change the world. Support our mission to provide quality education to underprivileged children in Nigeria."</p>
				  <button className="slides-btn">Donate Now</button>
				  <p>{ text[0].charAt(4)}</p>
			</div>
        {/* Indicators */}
        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
