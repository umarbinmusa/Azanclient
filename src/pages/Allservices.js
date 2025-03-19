import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_SERVICES = gql`
  query {
    getAllServices {
      id
      name
      price
    }
  }
`;

const ServicesList = () => {
  const { loading, error, data } = useQuery(GET_SERVICES);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Available Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.getAllServices.map((service) => (
          <div key={service.id} className="bg-white p-4 shadow-md rounded-lg border">
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-gray-700">Price: ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
