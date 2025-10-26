// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-ethers";
// import * as dotenv from "dotenv";
// dotenv.config();

// const config: HardhatUserConfig = {
//   solidity: "0.8.20",
//   networks: {
//     baseSepolia: {
//       url: process.env.BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org",
//       chainId: 84532,
//       accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
//     },
//   },
// };
// export default config;

// hardhat.config.cjs
require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org",
      chainId: 84532,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
