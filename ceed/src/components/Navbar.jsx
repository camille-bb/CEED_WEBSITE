import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* Navbar container with Tailwind utility classes */}
      <div className="font-sans fixed bg-white sticky top-0 mx-auto flex w-full items-center justify-between border-b p-4 flex-wrap">
        {/* Branding */}
        <div className="flex items-center space-x-4">
          <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/Logos/main.png" alt="" className='h-20'></img>
            <h1 className="text-red-800 font-bold text-7xl">CEED</h1>
          </a>
          
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/projects" className="text-red-800 hover:text-red-100 hover:bg-red-600 px-4 py-2 rounded text-xl">Projects</Link>
          <Link to="/teams" className="text-red-800 hover:text-red-100 px-4 py-2 hover:bg-red-600 rounded text-xl">Teams</Link>
          {/* <Link to="/members" className="text-red-800 hover:text-red-100 px-4 py-2 hover:bg-red-600 rounded text-xl">Members</Link> */}
          <Link to="/recruit" className="text-red-800 hover:text-red-100 px-4 py-2 hover:bg-red-600 rounded text-xl">Join Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
