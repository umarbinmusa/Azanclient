import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

// GraphQL Mutation
const BUY_DRUGS = gql`
  mutation BuyDrugs($drugs: [DrugPurchaseInput!]!) {
    buyDrugs(drugs: $drugs) {
      success
      message
      totalPrice
      receipt {
        id
        totalPrice
        date
        drugs {
          name
          quantity
          price
        }
      }
    }
  }
`;

function BuyDrug() {
  const [drugs, setDrugs] = useState([{ name: "", quantity: 1 }]);
  const [message, setMessage] = useState("");
  const [buyDrugs, { loading }] = useMutation(BUY_DRUGS);

  const handleInputChange = (index, field, value) => {
    const updatedDrugs = [...drugs];
    updatedDrugs[index][field] = value;
    setDrugs(updatedDrugs);
  };

  const addDrugField = () => {
    setDrugs([...drugs, { name: "", quantity: 1 }]);
  };

  const handlePurchase = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await buyDrugs({ variables: { drugs } });
  
      if (data?.buyDrugs?.success) {
        setMessage(`✅ Purchase successful! Receipt ID: ${data.buyDrugs.receipt.id}`);
      } else {
        setMessage(`⚠️ ${data?.buyDrugs?.message || "Purchase failed."}`);
      }
    } catch (err) {
      console.error("GraphQL Error:", err);
      setMessage(`❌ Error: ${err.message || "Something went wrong."}`);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#90D5FF]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-[40%]">
        <h2 className="text-xl font-bold mb-5">Buy Drugs</h2>

        {message && <p className="mb-4 text-sm text-center">{message}</p>}

        <form onSubmit={handlePurchase} className="flex flex-col gap-5">
          {drugs.map((drug, index) => (
            <div key={index} className="flex gap-3">
              <input
                type="text"
                placeholder="Drug Name"
                value={drug.name}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                className="border px-4 py-2 rounded w-2/3"
                required
              />
              <input
                type="number"
                placeholder="Quantity"
                value={drug.quantity}
                min="1"
                onChange={(e) => handleInputChange(index, "quantity", parseInt(e.target.value))}
                className="border px-4 py-2 rounded w-1/3"
                required
              />
            </div>
          ))}

          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={addDrugField}
          >
            + Add Another Drug
          </button>

          <button
            type="submit"
            className="bg-[#90D5FF] text-black px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Processing..." : "Buy"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BuyDrug;
