import React from 'react';
import { motion } from 'framer-motion'; // Using Framer Motion for smooth animations

const MemberSpotlight = ({ member, setActiveMember }) => {
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
          <img src={member.photo} alt=""
            className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
  
        {/* Right Side - Member Info */}
        <div className="w-1/2 bg-white p-6 text-center flex flex-col justify-center rounded-r-2xl relative">
          {/* Back Button */}
          <button 
            onClick={() => setActiveMember(null)} 
            className="absolute top-4 right-4 text-5xl text-gray-600 hover:text-black"
          >
            ✕
          </button>
  
          {/* Member Details */}
          <h2 className="text-3xl font-bold">{member.name}</h2>
          <p className="text-gray-600">{member.role}</p>
          <p className="mt-4 text-sm">{member.description}</p>
        </div>
      </motion.div>
    );
  };
  

export default MemberSpotlight;
