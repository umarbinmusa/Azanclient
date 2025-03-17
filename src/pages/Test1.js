import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

// Define the mutation
const PURCHASE_TEST_MUTATION = gql`
  mutation PurchaseTest($testName: String!, $quantity: Int!) {
    purchaseTest(testName: $testName, quantity: $quantity) {
      message
      success
      totalPrice
      receipt {
        id
        quantity
        totalPrice
        date
        test {
          name
          price
        }
      }
    }
  }
`;

const PurchaseTest = () => {
  const [testName, setTestName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [purchaseTest, { data, loading, error }] = useMutation(PURCHASE_TEST_MUTATION);

  const handlePurchase = async (e) => {
    e.preventDefault();
    try {
      await purchaseTest({ variables: { testName, quantity: parseInt(quantity) } });
    } catch (err) {
      console.error("Error purchasing test:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Purchase Test</h2>
      <form onSubmit={handlePurchase} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Test Name</label>
          <input
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
            className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Purchase Test"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-red-600 bg-red-100 p-3 rounded-md">{error.message}</p>
      )}

      {data && data.purchaseTest.success && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
          <p className="font-semibold">{data.purchaseTest.message}</p>
          <p className="mt-1">Total Price: <strong>${data.purchaseTest.totalPrice}</strong></p>
          <p>Date: {new Date(Number(data.purchaseTest.receipt.date)).toLocaleString()}</p>


          <p>Test Purchased: <strong>{data.purchaseTest.receipt.test.name}</strong></p>
        </div>
      )}
    </div>
  );
};

export default PurchaseTest;
