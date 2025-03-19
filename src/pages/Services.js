import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

// GraphQL Queries and Mutations
const GET_SERVICES = gql`
  query {
    getAllServices {
      id
      name
      price
    }
  }
`;

const PURCHASE_SERVICE = gql`
  mutation PurchaseService($serviceName: String!, $quantity: Int!) {
    purchaseService(serviceName: $serviceName, quantity: $quantity) {
      message
      success
      totalPrice
      receipt {
        id
        totalPrice
        date
      }
    }
  }
`;

const Services = () => {
  const { data, loading, error } = useQuery(GET_SERVICES);
  const [purchaseService] = useMutation(PURCHASE_SERVICE);

  const [selectedService, setSelectedService] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(null);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  const handlePurchase = async () => {
    try {
      const { data } = await purchaseService({
        variables: { serviceName: selectedService, quantity: parseInt(quantity) },
      });
      setMessage(data.purchaseService.message);
    } catch (err) {
      setMessage("Failed to purchase service.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Available Services</h2>
      <select
        className="w-full p-2 border rounded mb-3"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
      >
        <option value="">Select a Service</option>
        {data?.getAllServices.map((service) => (
          <option key={service.id} value={service.name}>
            {service.name} - ${service.price}
          </option>
        ))}
      </select>

      <input
        type="number"
        className="w-full p-2 border rounded mb-3"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />

      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handlePurchase}
        disabled={!selectedService || quantity < 1}
      >
        Purchase Service
      </button>

      {message && <p className="mt-3 text-center font-semibold">{message}</p>}
    </div>
  );
};

export default Services;
