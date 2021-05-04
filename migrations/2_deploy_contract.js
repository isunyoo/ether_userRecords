const userRecords = artifacts.require("userRecords");

module.exports = function(deployer) {
    deployer.deploy(userRecords);
};