// Navbar.tsx

import React, { useState, useEffect, useRef } from "react";
import { connectToMetaMask } from "../services/metamask";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleConnectClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleWalletOptionClick = (wallet: string) => {
    if (wallet === "Metamask") {
      connectToMetaMask();
      setWalletConnected(true);
    }
    console.log(`Selected wallet: ${wallet}`);
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-gray-200 font-semibold text-xl">D App</div>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={handleConnectClick}
          className="text-gray-400 font-semibold text-lg px-3 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-indigo-700"
        >
          Connect
        </button>
        {isDropdownOpen && (
          <div className="absolute top-12 right-0 bg-black text-gray-200 p-2 shadow-md rounded-md">
            <div className="flex flex-col space-y-1 divide-y divide-gray-200">
              <button
                onClick={() => handleWalletOptionClick("Uniswap Wallet")}
                className="w-full text-center whitespace-nowrap py-2 px-4 hover:text-indigo-400"
              >
                Uniswap Wallet
              </button>
              <button
                onClick={() => handleWalletOptionClick("Metamask")}
                className="w-full text-center py-2 px-4 hover:border-indigo-400 hover:text-indigo-400"
              >
                Metamask
              </button>
              <button
                onClick={() => handleWalletOptionClick("WalletConnect")}
                className="w-full text-center py-2 px-4 hover:border-indigo-400 hover:text-indigo-400"
              >
                WalletConnect
              </button>
              <button
                onClick={() => handleWalletOptionClick("Coinbase Wallet")}
                className="w-full text-center whitespace-nowrap py-2 px-4 hover:text-indigo-400"
              >
                Coinbase Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
