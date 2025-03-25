import { useQuery, gql } from "@apollo/client";

const GET_ALL_PRODUCTIONS = gql`
  query GetAllProductions {
    getAllProductions {
      id
      bank
      cash
      totalIncome
      availableBalance
      date
      productionAmount
      expense
      branch
    }
  }
`;

// Helper function to format date
const formatDate = (timestamp) => {
  if (!timestamp) return "N/A"; // Prevent errors if date is null
  const date = new Date(parseInt(timestamp)); // Ensure timestamp is parsed correctly
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function ProductionsList() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTIONS);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-6xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Production Records</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-xs md:text-sm">
              <th className="border p-2">Branch</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Bank</th>
              <th className="border p-2">Cash</th>
              <th className="border p-2">Total Income</th>
              <th className="border p-2">Expense</th>
              <th className="border p-2">Available Balance</th>
              <th className="border p-2">Production Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.getAllProductions.map((production) => (
              <tr key={production.id} className="text-center text-xs md:text-sm">
                <td className="border p-2">{production.branch}</td>
                <td className="border p-2">{formatDate(production.date)}</td>
                <td className="border p-2">{production.bank}</td>
                <td className="border p-2">{production.cash}</td>
                <td className="border p-2 font-bold">{production.totalIncome}</td>
                <td className="border p-2 text-red-500">{production.expense}</td>
                <td className="border p-2 text-green-500">{production.availableBalance}</td>
                <td className="border p-2">{production.productionAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Cards View */}
      <div className="mt-4 space-y-4 md:hidden">
        {data.getAllProductions.map((production) => (
          <div key={production.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">{production.branch}</h3>
            <p className="text-sm text-gray-600">📅 {formatDate(production.date)}</p>
            <p className="text-sm">
              💰 <span className="font-semibold">Bank:</span> {production.bank} | <span className="font-semibold">Cash:</span> {production.cash}
            </p>
            <p className="text-sm">
              📈 <span className="font-semibold">Total Income:</span> {production.totalIncome} | 🏦 <span className="font-semibold">Available Balance:</span> {production.availableBalance}
            </p>
            <p className="text-sm text-red-500">🔻 Expense: {production.expense}</p>
            <p className="text-sm text-blue-600">⚙️ Production Amount: {production.productionAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
