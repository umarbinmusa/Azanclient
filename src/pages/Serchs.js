import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_SERVICES = gql`
  query {
    getAllServices {
      id
      name
      price
    }
  }
`;

const SearchServices = () => {
  const { data, loading, error } = useQuery(GET_ALL_SERVICES);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  // Filter services as user types
  const filteredServices = data?.getAllServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Services</h1>

      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Display filtered services */}
      {searchTerm && (
        <div className="mt-4 space-y-2">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="p-3 border rounded-lg shadow bg-gray-50">
                <h2 className="text-lg font-semibold">{service.name}</h2>
                <p className="text-gray-700">Price: <span className="text-blue-600 font-bold">${service.price.toFixed(2)}</span></p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No service found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchServices;
