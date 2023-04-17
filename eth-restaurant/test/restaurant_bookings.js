const { assert } = require("chai");

const Restaurants = artifacts.require("restaurants");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("restaurants", function (/* accounts */) {
  before(async () => {
    this.restaurants = await Restaurants.deployed();
  });

  it("deploys successfully", async () => {
    const address = await this.restaurants.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("should create a restaurant", async () => {
    let result = await this.restaurants.createRestaurant("Franzén");

    const event = result.logs[0].args;

    assert.equal(event.success, true);
    assert.equal(event.id, 1);
  });

  it("should get the bookings", async () => {
    let result = await this.restaurants.getBookings(1);

    const event = result.logs[0].args;

    assert.notEqual(event, undefined);
    assert.equal(event[0].length, 0);
  });

  it("should create a booking", async () => {
    let result = await this.restaurants.createBooking(
      4,
      "Sebastian",
      "2023-02-17",
      18,
      1
    );

    const event = result.logs[0].args;

    assert.equal(event.success, true);
    assert.equal(event.id, 1);
  });

  it("should create another booking", async () => {
    let result = await this.restaurants.createBooking(
      2,
      "Hanna",
      "2023-02-14",
      18,
      1
    );

    const event = result.logs[0].args;

    assert.equal(event.success, true);
    assert.equal(event.id, 2);
  });

  it("should get all bookings for restaurant", async () => {
    let bookingsResult = await this.restaurants.getBookings(1);

    const bookingsEvent = bookingsResult.logs[0].args;

    assert.equal(bookingsEvent[0].length, 2);
  });

  it("should get specific booking", async () => {
    let bookingsResult = await this.restaurants.getBooking(1);

    const bookingEvent = bookingsResult.logs[0].args;

    assert.equal(bookingEvent[0].id, 1);
    assert.equal(bookingEvent[0].numberOfGuests, 4);
    assert.equal(bookingEvent[0].name, "Sebastian");
    assert.equal(bookingEvent[0].date, "2023-02-17");
    assert.equal(bookingEvent[0].time, 18);
    assert.equal(bookingEvent[0].restaurantId, 1);
  });

  it("should remove a booking", async () => {
    let result = await this.restaurants.removeBooking(2);

    const event = result.logs[0].args;

    assert.equal(event.success, true);

    let bookingsResult = await this.restaurants.getBookings(1);

    const bookingsEvent = bookingsResult.logs[0].args;

    assert.equal(bookingsEvent[0].length, 1);
  });
});
