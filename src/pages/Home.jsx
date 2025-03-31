// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      {/* NavBar */}
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

      {/* Hero + Search */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Find your dream spot <br className="hidden sm:inline" /> near what you love
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Search by landmark proximity, draw your own zones, or just vibe your way through the map.
        </p>

        <div className="flex justify-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by city, zip, or landmark..."
            className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-orange-500 text-white px-6 py-3 rounded-r-md hover:bg-orange-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* Quick Landmark Filters */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">Popular Landmark Filters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Library', 'Movie Theater', 'Target', 'Fishing Spot'].map((landmark, index) => (
            <button
              key={index}
              className="border-2 border-cyan-400 text-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-50 transition"
            >
              {landmark}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
