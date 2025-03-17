import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_TESTS = gql`
  query GetAllTests {
    getAllTests {
      id
      name
      price
    }
  }
`;

const TestList = () => {
  const { loading, error, data } = useQuery(GET_ALL_TESTS);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Available Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.getAllTests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg shadow-lg p-5 border">
            <h3 className="text-lg font-semibold text-gray-800">{test.name}</h3>
            <p className="text-gray-600">Price: <span className="font-bold">${test.price}</span></p>
            <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestList;
