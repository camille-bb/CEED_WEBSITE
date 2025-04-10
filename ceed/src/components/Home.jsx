import React from 'react';
import Timeline from './Timeline';
import headerImage from '../images/header.jpg';

function Home() {
  return (
    <div className="flex flex-col items-center">
    <div className="relative w-full">
      <img 
        src={headerImage} 
        alt="Header Background"
        className="w-full h-80 object-cover" 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-red-800">
        <h1 className="text-6xl lg:text-8xl font-extrabold">WELCOME TO CEED</h1>
      </div>
    </div>
  

    <div className="max-w-4xl mx-auto p-6 mt-12 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-4">Cornell Entertainment Engineering & Design Club</h2>
      <p className="text-lg text-gray-800 text-center">
        This is an introductory section where you can give a brief description of what this website is about.
        Feel free to explore the content and get to know more about the features we offer.
      </p>
    </div>

    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-black mb-6 ">Our Mission</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-500 text-white p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Mission 1</h3>
          <p className="text-lg">Our mission is to provide innovative solutions to our customers, ensuring the highest quality of service and support in every interaction.</p>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Mission 2</h3>
          <p className="text-lg">We aim to inspire and empower communities through education and sustainability, making a lasting impact on the world.</p>
        </div>

        <div className="bg-red-700 text-white p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Mission 3</h3>
          <p className="text-lg">Our goal is to create a seamless digital experience that drives business growth while focusing on customer satisfaction and innovation.</p>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold text-center text-black">Our Story</h2>

      {/* Timeline Component */}
      <Timeline />
    </div>

  );
}

export default Home;
