import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_TEST_RECEIPTS = gql`
  query GetAllTestReceipts {
    getAllTestReceipts {
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
`;

const TestReceipts = () => {
  const { loading, error, data } = useQuery(GET_ALL_TEST_RECEIPTS);

  if (loading) return <p>Loading test receipts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handlePrint = (receipt) => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .receipt { border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="receipt">
            <h2>Test Receipt</h2>
            <h2> Azan Hospital</h2>
            <p><strong>Test Name:</strong> ${receipt.test.name}</p>
            <p><strong>Quantity:</strong> ${receipt.quantity}</p>
            <p><strong>Price per Test:</strong> $${receipt.test.price}</p>
            <p><strong>Total Price:</strong> $${receipt.totalPrice}</p>
            <p><strong>Date:</strong> ${new Date(parseInt(receipt.date)).toLocaleString()}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Azan Hospital</h2>
     <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Receipts</h2>
      {data.getAllTestReceipts.map((receipt) => (
        <div key={receipt.id} className="p-4 bg-gray-100 rounded-lg shadow-sm mb-3">
          <p><strong>Test Name:</strong> {receipt.test.name}</p>
          <p><strong>Quantity:</strong> {receipt.quantity}</p>
          <p><strong>Total Price:</strong> ${receipt.totalPrice}</p>
          <p><strong>Date:</strong> {new Date(parseInt(receipt.date)).toLocaleString()}</p>
          <button
            onClick={() => handlePrint(receipt)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
          >
            Print Receipt
          </button>
        </div>
      ))}
    </div>
  );
};

export default TestReceipts;
