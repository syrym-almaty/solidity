import { ethers } from "hardhat";  // Use Hardhat's ethers, not ethers.js
import { createPublicClient, http } from "viem";
import { localhost } from "viem/chains";

async function main() {
    const client = createPublicClient({
        chain: localhost,
        transport: http(),
    });

    // Create a contract factory and deploy the contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();

    // Wait for the contract to be deployed (ethers.js v5 way)
    await hello.deployed();

    // Get the deployed contract's address (ethers.js v5 way)
    console.log("HelloWorld deployed to:", hello.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
