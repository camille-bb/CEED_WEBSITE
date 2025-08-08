import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemberSpotlight = ({ member, setActiveMember }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? member.slidephotos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === member.slidephotos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      className="fixed w-[80vw] max-w-[800px] h-[60vh] max-h-[500px] 
      inset-0 mx-auto my-auto bg-white rounded-2xl 
      border border-black flex"
      initial={{ scale: 0.1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 1 }}
    >
      {/* Left Side - Profile Picture */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center p-6 rounded-l-2xl">
        <img
          src={member.photo}
          alt=""
          className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Right Side - Member Info */}
      <div className="w-1/2 bg-white p-6 text-center flex flex-col justifty-between rounded-r-2xl relative">
        {/* Back Button */}
        <button
          onClick={() => setActiveMember(null)}
          className="absolute top-4 right-4 text-5xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Member Details */}
        <div classname="text-center">
          <h2 className="text-3xl font-bold">{member.name}</h2>
          <p className="text-gray-600">{member.role}</p>
          <p className="mt-4 text-sm">{member.description}</p>
        </div>
        

        {/* Slideshow */}
        <div>
          {member.slidephotos && member.slidephotos.length > 0 && (
          <div className="mt-4 relative">
            <img
              src={member.slidephotos[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-100 object-cover rounded-lg"
            />

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white px-2 py-1 rounded-r shadow hover:bg-gray-100"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white px-2 py-1 rounded-l shadow hover:bg-gray-100"
            >
              ›
            </button>
          </div>
        )}
        </div>
        
      </div>
    </motion.div>
  );
};

export default MemberSpotlight;
