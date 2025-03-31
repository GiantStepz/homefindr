import React from 'react';
import mockData from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

const Results = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <SearchBar />
      <h2 className="text-3xl font-bold mb-6 text-center">Search Results</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {mockData.map((property, i) => (
          <PropertyCard key={i} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Results;
