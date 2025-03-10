import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const ADD_DRUG = gql`
  mutation AddDrug($name: String!, $price: Float!, $stock: Int!) {
    addDrug(name: $name, price: $price, stock: $stock) {
      id
      name
      price
      stock
    }
  }
`;

function AddDrug() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [message, setMessage] = useState("");

  const [addDrug, { loading,  }] = useMutation(ADD_DRUG, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    onCompleted: () => {
      setMessage("✅ Drug added successfully!");
      setTimeout(() => navigate("/dashboard"), 2000);
    },
    onError: (err) => {
      setMessage("❌ " + (err.message || "Error adding drug."));
    },
  });

  const handleAddDrug = async (e) => {
    e.preventDefault();
    if (!name || !price || !stock) {
      setMessage("⚠️ Please fill all fields correctly.");
      return;
    }
  
    try {
      await addDrug({
        variables: { name, price: parseFloat(price), stock: parseInt(stock) },
        context: { 
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Send token per request
          },
        },
      });
    } catch (error) {
      console.error("Mutation error:", error);
      setMessage("❌ " + (error.message || "Error adding drug."));
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add Drug</h2>
        {message && <p className="mb-4 text-sm text-red-600">{message}</p>}
        <form onSubmit={handleAddDrug} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Drug Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            className="border p-2 rounded"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Drug"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDrug;
