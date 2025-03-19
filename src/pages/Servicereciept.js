import React, { useRef } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_SERVICE_RECEIPTS = gql`
  query {
    getAllServiceReceipts {
      id
      quantity
      totalPrice
      date
      service {
        id
        name
        price
      }
    }
  }
`;

const ServiceReceipts = () => {
  const { data, loading, error } = useQuery(GET_ALL_SERVICE_RECEIPTS);
  
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  const handlePrint = (receiptId) => {
    const receiptElement = document.getElementById(`receipt-${receiptId}`);
    if (receiptElement) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html>
          <head>
            <title>Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .receipt-container { border: 1px solid #ddd; padding: 20px; width: 300px; }
              h2 { text-align: center; }
              .receipt-info { margin-bottom: 10px; }
              .total { font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="receipt-container">${receiptElement.innerHTML}</div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Service Receipts</h1>

      {data.getAllServiceReceipts.length === 0 ? (
        <p className="text-center text-gray-500">No receipts available.</p>
      ) : (
        data.getAllServiceReceipts.map((receipt) => (
          <div
            key={receipt.id}
            id={`receipt-${receipt.id}`}
            className="border p-4 rounded-lg mb-4 shadow bg-gray-50"
          >
            <h2 className="text-lg font-semibold text-center">Receipt</h2>
            <p className="receipt-info"><strong>Service:</strong> {receipt.service.name}</p>
            <p className="receipt-info"><strong>Quantity:</strong> {receipt.quantity}</p>
            <p className="receipt-info"><strong>Price per Unit:</strong> ${receipt.service.price.toFixed(2)}</p>
            <p className="receipt-info total"><strong>Total:</strong> ${receipt.totalPrice.toFixed(2)}</p>
            <p className="text-gray-600"><strong>Date:</strong> {new Date(receipt.date).toLocaleString()}</p>
            
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handlePrint(receipt.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Print Receipt
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceReceipts;
