import React from 'react';

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;

