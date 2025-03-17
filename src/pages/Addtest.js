import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
const ADD_TEST = gql`
  mutation AddTest($name: String!, $price: Float!) {
    addTest(name: $name, price: $price) {
      id
      name
      price
       }
  }
`;

function AddTest() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const [addTest, { loading,  }] = useMutation(ADD_TEST, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
    onCompleted: () => {
      setMessage("✅ Drug added successfully!");
      setTimeout(() => navigate("/dashbord"), 2000);
    },
    onError: (err) => {
      setMessage("❌ " + (err.message || "Error adding Test."));
    },
  });

  const handleAddDrug = async (e) => {
    e.preventDefault();
    if (!name || !price ) {
      setMessage("⚠️ Please fill all fields correctly.");
      return;
    }
  
    try {
      await addTest({
        variables: { name, price: parseFloat(price) },
        context: { 
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Send token per request
          },
        },
      });
    } catch (error) {
      console.error("Mutation error:", error);
      setMessage("❌ " + (error.message || "Error adding test."));
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Nav />
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add Test</h2>
        {message && <p className="mb-4 text-sm text-red-600">{message}</p>}
        <form onSubmit={handleAddDrug} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Test Name"
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

export default AddTest;
