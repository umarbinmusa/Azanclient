import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const ADD_TRANSACTIONS = gql`
  mutation AddTransaction(
    $date: String!
    $Pharmacy_Fee: Float!
    $Card_Fee: Float!
    $Theater_Surgery: Float!
    $Consultancy_Fee: Float!
    $Scanning: Float!
    $Other_Services: Float!
    $Lab_Test: Float!
  ) {
    addTransactions(
      date: $date
      Pharmacy_Fee: $Pharmacy_Fee
      Card_Fee: $Card_Fee
      Theater_Surgery: $Theater_Surgery
      Consultancy_Fee: $Consultancy_Fee
      Scanning: $Scanning
      Other_Services: $Other_Services
      Lab_Test: $Lab_Test
    ) {
      id
      date
      totalAmoutnt
    }
  }
`;

export default function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    Pharmacy_Fee: "",
    Card_Fee: "",
    Theater_Surgery: "",
    Consultancy_Fee: "",
    Scanning: "",
    Other_Services: "",
    Lab_Test: "",
  });

  const [addTransaction, { loading, error, data }] = useMutation(ADD_TRANSACTIONS);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTransaction({
        variables: {
          date: formData.date,
          Pharmacy_Fee: parseFloat(formData.Pharmacy_Fee) || 0,
          Card_Fee: parseFloat(formData.Card_Fee) || 0,
          Theater_Surgery: parseFloat(formData.Theater_Surgery) || 0,
          Consultancy_Fee: parseFloat(formData.Consultancy_Fee) || 0,
          Scanning: parseFloat(formData.Scanning) || 0,
          Other_Services: parseFloat(formData.Other_Services) || 0,
          Lab_Test: parseFloat(formData.Lab_Test) || 0,
        },
      });
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add Transaction</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Pharmacy_Fee" placeholder="Pharmacy Fee" value={formData.Pharmacy_Fee} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Card_Fee" placeholder="Card Fee" value={formData.Card_Fee} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Theater_Surgery" placeholder="Theater Surgery" value={formData.Theater_Surgery} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Consultancy_Fee" placeholder="Consultancy Fee" value={formData.Consultancy_Fee} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Scanning" placeholder="Scanning Fee" value={formData.Scanning} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Other_Services" placeholder="Other Services" value={formData.Other_Services} onChange={handleChange} required className="w-full p-2 border rounded" />

        <input type="number" name="Lab_Test" placeholder="Lab Test" value={formData.Lab_Test} onChange={handleChange} required className="w-full p-2 border rounded" />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-green-700 font-semibold">Transaction Added!</p>
          <p>Total Amount: ₦{data.addTransactions.totalAmoutnt}</p>
        </div>
      )}
    </div>
  );
}
