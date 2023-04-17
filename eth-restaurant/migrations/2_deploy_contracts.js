var Restaurants = artifacts.require("./../contracts/restaurants.sol");

module.exports = function (deployer) {
  deployer.deploy(Restaurants);
};
