import React, { useState, useEffect } from 'react';
import headerImage from '../images/banner2.jpg';

// Slideshow images
import slide1 from '../images/slide1.JPG';
import slide2 from "../images/furniture1.jpg";
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.png';

function Home() {
  const slides = [slide1, slide2, slide3, slide4];
  const [current, setCurrent] = useState(0);

  // Auto-change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="relative w-full">
        <img
          src={headerImage}
          alt="Header Background"
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-red-800">
          <h1 className="text-6xl lg:text-7xl font-bold">
            Inspiring the Next Generation of Entertainment Innovators.
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto p-6 mt-12 bg-gray-100 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-4">
          Cornell Entertainment Engineering & Design Club
        </h2>
        <p className="text-lg text-gray-800 text-center">
          We are a team from all fields, engaging in hands-on projects that mix engineering,
          design, and creativity to spark curiosity, build technical skills, and empower future
          innovators to push the boundaries of interactive entertainment.
        </p>
      </div>

      {/* Slideshow */}
      <div className="relative w-full max-w-4xl mt-8 overflow-hidden rounded-xl shadow-lg">
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-96 object-cover transition-opacity duration-700 ease-in-out"
        />
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-red-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
