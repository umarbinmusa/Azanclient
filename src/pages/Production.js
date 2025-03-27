"use client";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const ADD_PRODUCTION = gql`
  mutation AddProduction(
    $bank: Float!
    $cash: Float!
    $date: String!
    $branch: String!
    $productionAmount: Float!
    $expense: Float!
  ) {
    addProduction(
      bank: $bank
      cash: $cash
      date: $date
      branch: $branch
      productionAmount: $productionAmount
      expense: $expense
    ) {
      id
      bank
      totalIncome
      availableBalance
      cash
      date
      productionAmount
      expense
      createdAt
      branch
    }
  }
`;

const branches = ["ZABI_BRANCH", "RANJI_BRANCH", "ALHAJI_BRANCH", "DOGARAWA_BRANCH","YOUGHUT"];

export default function ProductionForm() {
  const [formData, setFormData] = useState({
    bank: "",
    cash: "",
    date: "",
    branch: "",
    productionAmount: "",
    expense: "",
  });

  const [addProduction, { loading, error, data }] = useMutation(ADD_PRODUCTION);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { bank, cash, date, branch, productionAmount, expense } = formData;

    try {
      await addProduction({
        variables: {
          bank: parseFloat(bank),
          cash: parseFloat(cash),
          date,
          branch,
          productionAmount: parseFloat(productionAmount),
          expense: parseFloat(expense),
        },
      });
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add Production</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="bank"
          placeholder="Bank Amount"
          value={formData.bank}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="cash"
          placeholder="Cash Amount"
          value={formData.cash}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Branch Searchable Input */}
        <input
          list="branches"
          name="branch"
          placeholder="Select Branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <datalist id="branches">
          {branches.map((b) => (
            <option key={b} value={b} />
          ))}
        </datalist>

        <input
          type="number"
          name="productionAmount"
          placeholder="Production Amount"
          value={formData.productionAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="expense"
          placeholder="Expense"
          value={formData.expense}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <p className="text-green-700 font-semibold">Production Added!</p>
          <p>Total Income: ₦{data.addProduction.totalIncome}</p>
          <p>Available Balance: ₦{data.addProduction.availableBalance}</p>
        </div>
      )}
    </div>
  );
}
