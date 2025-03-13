import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import Nav from "./Nav";
const DELETE_DRUG_BY_NAME = gql`
  mutation DeleteDrug($name: String!) {
    deleteDrug(name: $name) {
      name
    }
  }
`;

const DeleteDrugForm = () => {
  const [name, setName] = useState("");
  const [deleteDrug, { data, loading, error }] = useMutation(DELETE_DRUG_BY_NAME);

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter a drug name!");
      return;
    }

    try {
      await deleteDrug({ variables: { name } });
      alert(`Drug "${name}" deleted successfully!`);
      setName("");
    } catch (err) {
      console.error("Error deleting drug:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Nav />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Delete Drug</h2>
        <form onSubmit={handleDelete} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Drug Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Drug Name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Drug"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error.message}</p>}
          {data && <p className="text-green-500 text-sm text-center">Drug deleted successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default DeleteDrugForm;
