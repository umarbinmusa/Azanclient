import { useQuery, gql } from "@apollo/client";

const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
    getAllTransactions {
      date
      Pharmacy_Fee
      Card_Fee
      Theater_Surgery
      Consultancy_Fee
      Scanning
      Other_Services
      Lab_Test
      totalAmoutnt
    }
  }
`;

// Helper function to format date
const formatDate = (timestamp) => {
  if (!timestamp) return "N/A";
  const date = new Date(parseInt(timestamp));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function TransactionsList() {
  const { loading, error, data } = useQuery(GET_ALL_TRANSACTIONS);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  // Sorting transactions by date (newest first)
  const sortedTransactions = [...(data?.getAllTransactions || [])].sort((a, b) => {
    const dateA = a.date ? new Date(parseInt(a.date)) : new Date(0);
    const dateB = b.date ? new Date(parseInt(b.date)) : new Date(0);
    return dateB - dateA;
  });

  return (
    <div className="max-w-6xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Transaction Records</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-xs md:text-sm">
              <th className="border p-2">Date</th>
              <th className="border p-2">Pharmacy Fee</th>
              <th className="border p-2">Card Fee</th>
              <th className="border p-2">Theater Surgery</th>
              <th className="border p-2">Consultancy Fee</th>
              <th className="border p-2">Scanning</th>
              <th className="border p-2">Other Services</th>
              <th className="border p-2">Lab Test</th>
              <th className="border p-2">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction, index) => (
              <tr key={index} className="text-center text-xs md:text-sm">
                <td className="border p-2">{formatDate(transaction.date)}</td>
                <td className="border p-2">{transaction.Pharmacy_Fee || "N/A"}</td>
                <td className="border p-2">{transaction.Card_Fee || "N/A"}</td>
                <td className="border p-2">{transaction.Theater_Surgery || "N/A"}</td>
                <td className="border p-2">{transaction.Consultancy_Fee || "N/A"}</td>
                <td className="border p-2">{transaction.Scanning || "N/A"}</td>
                <td className="border p-2">{transaction.Other_Services || "N/A"}</td>
                <td className="border p-2">{transaction.Lab_Test || "N/A"}</td>
                <td className="border p-2 font-bold">{transaction.totalAmoutnt || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
