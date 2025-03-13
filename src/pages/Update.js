import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import Nav from "./Nav";

const UPDATE_DRUG_BY_NAME = gql`
  mutation UpdateDrugByName($name: String!, $price: Float!, $stock: Int!) {
    updateDrugByName(name: $name, price: $price, stock: $stock) {
      name
      price
      stock
    }
  }
`;

const UpdateDrugForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [updateDrugByName, { data, loading, error }] = useMutation(UPDATE_DRUG_BY_NAME);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      alert("All fields are required!");
      return;
    }

    try {
      await updateDrugByName({
        variables: { name, price: parseFloat(price), stock: parseInt(stock) },
      });

      alert("Drug updated successfully!");
      setName("");
      setPrice("");
      setStock("");
    } catch (err) {
      console.error("GraphQL Error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Nav />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Update Drug</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Drug Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Drug Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Drug Name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Stock Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter Stock Quantity"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Drug"}
          </button>

          {/* Error Handling */}
          {error && <p className="text-red-500 text-sm text-center">{error.message}</p>}
          {data && <p className="text-green-500 text-sm text-center">Drug updated successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateDrugForm;
