export const connectToMetaMask = async () => {
  try {
    if (window.ethereum) {
      // Requesting accounts after user interaction
      await window.ethereum.request({ method: "eth_requestAccounts" });
      // window.web3 = new Web3(window.ethereum); //not sure if this is necessary or not
      console.log("Connected to MetaMask");
      return true;
    } else {
      console.log("MetaMask not found");
      return false;
    }
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    return false;
  }
};

export const requestTransactionApproval = async (amount: string) => {
  if (!window.ethereum) {
    console.error("MetaMask not found");
    return;
  }

  try {
    // Assuming you have the ABI and address of the ERC-20 token contract
    const tokenContract = new window.ethereum.Contract(
      // ERC-20 token contract ABI
      [
        /* ... */
      ],
      // ERC-20 token contract address
      "0xYourTokenContractAddress"
    );

    // Convert the amount to the smallest unit (wei)
    const amountInWei = window.ethereum.utils.toWei(amount, "ether");

    // Call the approve function on the ERC-20 token contract
    await tokenContract.methods
      .approve(
        "0xYourSmartContractAddress", // Replace with your smart contract address
        amountInWei
      )
      .send({ from: window.ethereum.selectedAddress });

    console.log(`Approval successful for ${amount} ETH`);
  } catch (error) {
    console.error("Error requesting transaction approval:", error);
  }
};
