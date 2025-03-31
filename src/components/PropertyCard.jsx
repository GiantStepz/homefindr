import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
        <p className="text-gray-500 text-sm">{property.address}</p>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-orange-500 font-bold text-lg">${property.price.toLocaleString()}</span>
          <span className="text-gray-600">
            {property.bedrooms} bd • {property.bathrooms} ba
          </span>
        </div>

        <div className="mt-3 text-xs text-gray-400">
          Near: {property.nearby.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

