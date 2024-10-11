import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld contract", function () {
  let helloWorld: any;

  before(async function () {
    // Fetch the deployed contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    helloWorld = await HelloWorld.deploy();
    await helloWorld.deployed();
  });

  it("Should return the correct greeting", async function () {
    // Call the `greet` function
    const greeting = await helloWorld.greet();
    
    // Use Chai assertions to check the result
    expect(greeting).to.equal("Hello, World!");
  });
});
