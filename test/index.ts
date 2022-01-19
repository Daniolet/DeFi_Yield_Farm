import { expect } from "chai"
import { ethers } from "hardhat"
import { NucodeChef } from "../typechain";

describe("NucodeChef", function () {
    let blueIce;
    let fundDistributor;
    let NucodeChef;
    let chef : NucodeChef;
//   let addr1;
//   let addr2;
//   let addrs;

  beforeEach(async function () {
    const BlueIce = await ethers.getContractFactory("BlueIce");
    const blueIce = await BlueIce.deploy("BlueIce", "BLUEICE", "0xab05dd80168ecceb4f34eaa0793fda22cae8fe92", 10000);

    await blueIce.deployed();

    const FundDistributor = await ethers.getContractFactory("FundDistributor");
    const fundDistributor = await FundDistributor.deploy();

    await fundDistributor.deployed();

    NucodeChef = await ethers.getContractFactory("NucodeChef");
    chef = await NucodeChef.deploy(blueIce.address, fundDistributor.address);

    console.log('Before Each hook done');
  })

  it("PoolLength should execute", async function () {
    expect(await chef.poolLength()).to.be.equal(1)
  })

});