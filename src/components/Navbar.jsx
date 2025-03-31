import React from 'react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm">
      <h1 className="text-3xl font-bold">
        <span className="text-gray-800">Home</span>
        <span className="text-orange-500">Findr</span>
      </h1>
      <nav className="space-x-6">
        <a href="#" className="text-orange-500 border border-orange-500 px-3 py-1 rounded-md hover:bg-orange-50 transition">
          Search
        </a>
        <a href="#" className="text-cyan-500 border border-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-50 transition">
          Saved Homes
        </a>
        <a href="#" className="text-purple-500 border border-purple-500 px-3 py-1 rounded-md hover:bg-purple-50 transition">
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

