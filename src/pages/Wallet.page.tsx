import { useState } from "react";
import { requestTransactionApproval } from "../services/metamask";

const Wallet = () => {
  const [transactionAmount, setTransactionAmount] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionAmount(e.target.value);
  };

  const handleApproval = async () => {
    requestTransactionApproval(transactionAmount);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Welcome to the DApp</h2>
          <p className="text-gray-300 mb-6">
            This is a simple widget for approving X amount to be transacted by a
            smart contract on your behalf.
          </p>
          <div className="bg-gray-900 p-4 rounded-md">
            {/* Your rounded rectangle content goes here */}
            <h3 className="text-xl font-semibold mb-2">Transaction Approval</h3>
            <p className="text-gray-400 mb-4">
              Approve the transaction amount:
            </p>
            {/* Input for the transaction amount */}
            <input
              type="number"
              placeholder="Enter amount"
              value={transactionAmount}
              onChange={handleAmountChange}
              className="w-full p-2 mb-4 rounded-md bg-gray-800 text-white"
            />
            {/* Button for approval */}
            <button
              onClick={handleApproval}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Prompt Approval
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
