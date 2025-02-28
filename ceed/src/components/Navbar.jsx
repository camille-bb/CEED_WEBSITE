import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* Navbar container with Tailwind utility classes */}
      <div className="bg-white sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b p-4 flex-wrap">
        {/* Branding */}
        <div className="flex items-center space-x-4">
          <img src="/Logos/main.png" alt="" className='h-20'></img>
          <h1 className="text-red-800 font-bold text-7xl">
            CEED
          </h1>
        </div>
        

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-red-800 hover:bg-red-300 px-4 py-2 rounded text-xl">Projects</Link>
          <Link to="/" className="text-red-800 hover:bg-red-300 px-4 py-2 rounded text-xl">Members</Link>
          <Link to="/recruit" className="text-red-800 hover:bg-red-300 px-4 py-2 rounded text-xl">Join Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
