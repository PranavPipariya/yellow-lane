"use client";

declare global {
  interface Window {
    ethereum?: any;
  }
}

import { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnectButton() {
  const [addr, setAddr] = useState<string | null>(null);

  async function connect() {
    try {
      if (!window.ethereum) {
        alert("Install MetaMask");
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum as any);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddr(accounts[0]);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      {addr ? (
        <div className="mb-2 text-sm">
          Connected: {addr.substring(0, 6)}...{addr.slice(-4)}
        </div>
      ) : (
        <button
          onClick={connect}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
