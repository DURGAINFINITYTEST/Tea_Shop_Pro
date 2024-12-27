import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const images = [
    "https://img.freepik.com/free-photo/watercolor-coffee-cup-coffee-beans-illustration_23-2151720120.jpg",
    "https://i.pinimg.com/originals/b0/23/fd/b023fd5a4057c1cf85755e88d43f564a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4FWHBIjT-FN8wgdFJZBOMcp5paS4i2seLg&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <section id="home" className="home">
      <h2>Welcome to Our Tea Shop!</h2>
      <h4>Located in KPHB PHASE 7,Hyderabad, we serve the finest tea and beverages.</h4>
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
      </div>
    </section>
  );
};

export default Home;
