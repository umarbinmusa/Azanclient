import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DRUGS = gql`
  query GetDrugs {
    getDrugs {
      id
      name
      price
      stock
    }
  }
`;

function GetDrugs() {
  const { loading, error, data } = useQuery(GET_DRUGS, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  if (loading) return <p>Loading drugs...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Available Drugs</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Price ($)</th>
            <th className="border p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.getDrugs.map((drug) => (
            <tr key={drug.id} className="text-center">
              <td className="border p-2">{drug.name}</td>
              <td className="border p-2">{drug.price.toFixed(2)}</td>
              <td className="border p-2">{drug.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetDrugs;
