// const IERC2981 = artifacts.require("IERC2981");
const Roles = artifacts.require("Roles");
const MinterRole = artifacts.require("MinterRole");
const MousaiNFT = artifacts.require("MousaiNFT");
const MarketPlace = artifacts.require("MarketPlace");



module.exports = async function(deployer) {
    deployer.deploy(Roles);
    // deployer.deploy(MinterRole);
    // deployer.link(Roles, MinterRole);
    // deployer.deploy(IERC2981);
    deployer.deploy(MousaiNFT("", 9000000, 10)).then(function() {
        return deployer.deploy(MarketPlace, MousaiNFT.address);
      });

  
};
