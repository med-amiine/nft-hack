import { assert } from "chai";

const MousaiNFTContract =  artifacts.require("../contracts/MousaiNFT.sol");

contract('MousaiNFTContract', function(accounts){
    // let artistInfo = "metadata"
    // // mint NFT token
    // it('test the mint function',async function() {
    //     let metatdata = "http://location";
    //     let contract = await MousaiNFTContract.deployed();
    //     await contract.mint(accounts[3],metatdata,{from: accounts[0]});
    //     await contract.mint(accounts[3],"metatdata",{from: accounts[0]});

    //     let holderTokens = await contract.balanceOf(accounts[3],{from: accounts[0]});
    //     console.log(holderTokens);
    //     // assert.equal(count, 0, "count diffirent than 0");
    // });

    // increase function test
    // it('test increase function', async() => {
    //     let contract = await TestContract.deployed();
    //     let increase = await contract.increase.call();
    //     assert.equal(increase.valueOf(),1,"value different than 2");
    // });

    // set count test
    // it('test setcount function',async function() {
    //     let contract = await TestContract.deployed();
        
    //     let amount = 5;
    //     await contract.setCount(amount, {from: accounts[0]});
    //     let count = await contract.getCount.call({from: accounts[0]});
    //     console.log("count:", count['words']);
    //     console.log("amount:", amount);
    //     assert.equal(count,10,"Amount wasn't correctly taken from the sender");
    // });

    
    // set count test
    // it('test setcount function',async () => {
    //     let contract = await TestContract.deployed();
        
    //     await contract.increase({from: accounts[0]});
    //     await contract.increase({from: accounts[0]});
    //     let count = await contract.getCount.call({from: accounts[0]});
    //     console.log("count:", count['words'][0]);
    //     assert.equal(count,2,"Amount wasn't correctly taken from the sender");

    //     await contract.decrease({from: accounts[0]});
    //     // await contract.decrease({from: accounts[0]});

    //     let count1 = await contract.getCount.call({from: accounts[0]})
    //     console.log("count1:", count1['words'][0]);
    //     assert.equal(count1,0)
        
    // });




})

