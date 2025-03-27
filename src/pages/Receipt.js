import { useQuery, gql } from "@apollo/client";
import Nav from "./Nav";

const GET_ALL_RECEIPTS = gql`
  query GetAllReceipts {
    allReceipts {
      id
      totalPrice
      date
      drugs {
        name
        quantity
      }
    }
  }
`;

const Receipts = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECEIPTS);

  const handlePrint = (receipt) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt - ${receipt.id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .receipt-container { max-width: 400px; margin: auto; border: 1px solid #ddd; padding: 10px; }
            h2, h3 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .total { font-weight: bold; text-align: right; }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <h2>Pharmacy Receipt</h2>
            <p><strong>Receipt ID:</strong> ${receipt.id}</p>
            <p><strong>Date:</strong> ${new Date(parseInt(receipt.date)).toLocaleString()}</p>
            <table>
              <thead>
                <tr>
                  <th>Drug Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                ${receipt.drugs
                  .map(
                    (drug) =>
                      `<tr><td>${drug.name}</td><td>${drug.quantity}</td></tr>`
                  )
                  .join("")}
              </tbody>
            </table>
            <p class="total">Total Price: <strong>$${receipt.totalPrice}</strong></p>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className=" flex p-6 max-w-4xl mx-auto">
      <Nav />
       
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Receipts</h1>
      <h2 className="text-center text-2xl font-bold">AZAN HOSPITAL</h2>
      <div className="grid gap-4">
        {data.allReceipts.map((receipt) => (
          <div key={receipt.id} className="bg-white p-4 shadow-md rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Receipt ID: {receipt.id}</h2>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Date:</span> {new Date(parseInt(receipt.date)).toLocaleString()}
            </p>
            <p className="text-sm text-gray-700 font-medium mt-2">
              Total Price: <span className="text-green-600">₦{receipt.totalPrice}</span>
            </p>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-600">Drugs Purchased:</h3>
              <table className="w-full mt-2 border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2 text-gray-600">Drug Name</th>
                    <th className="text-left p-2 text-gray-600">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {receipt.drugs.map((drug, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-2 text-gray-700">{drug.name}</td>
                      <td className="p-2 text-gray-700">{drug.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Print Button */}
            <button
              onClick={() => handlePrint(receipt)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              🖨️ Print Receipt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receipts;
