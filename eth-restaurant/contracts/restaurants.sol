// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Restaurants {
    struct Restaurant {
        uint256 id;
        string name;
        uint256[] bookingIds;
    }

    struct Booking {
        uint256 id;
        uint256 numberOfGuests;
        string name;
        string date;
        uint256 time;
        uint256 restaurantId;
    }

    mapping(uint256 => Restaurant) public restaurants;
    mapping(uint256 => Booking) public bookings;
    uint256 public restaurantCount = 0;
    uint256 public bookingCount = 0;

    event RestaurantCreated(bool success, uint256 id);
    event BookingCreated(bool success, uint256 id);

    event GotBookings(uint256[]);

    event DeletedBooking(bool success);

    event UpdatedBooking(Booking booking);

    function createRestaurant(string memory name) public {
        restaurantCount++;
        restaurants[restaurantCount] = Restaurant(
            restaurantCount,
            name,
            new uint256[](0)
        );

        emit RestaurantCreated(true, restaurantCount);
    }

    function createBooking(
        uint256 numberOfGuests,
        string memory name,
        string memory date,
        uint256 time,
        uint256 restaurantId
    ) public {
        bookingCount++;
        bookings[bookingCount] = Booking(
            bookingCount,
            numberOfGuests,
            name,
            date,
            time,
            restaurantId
        );

        restaurants[restaurantId].bookingIds.push(bookingCount);

        emit BookingCreated(true, bookingCount);
    }

    function getBookings(uint256 id) public view returns (uint256[] memory) {
        return restaurants[id].bookingIds;
    }

    function editBooking(
        uint256 id,
        uint256 numberOfGuests,
        string memory name,
        string memory date,
        uint256 time
    ) public {
        Booking storage booking = bookings[id];
        booking.name = name;
        booking.numberOfGuests = numberOfGuests;
        booking.time = time;
        booking.date = date;

        emit UpdatedBooking(booking);
    }

    function removeBooking(uint256 id) public {
        uint256 rId = bookings[id].restaurantId;

        Restaurant storage r = restaurants[rId];

        uint256 index = 0;
        for (uint256 i = 0; i < r.bookingIds.length; i++) {
            if (r.bookingIds[i] == id) {
                index = i;
            }
        }

        for (uint256 i = index; i < r.bookingIds.length - 1; i++) {
            r.bookingIds[i] = r.bookingIds[i + 1];
        }
        r.bookingIds.pop();

        delete bookings[id];

        emit DeletedBooking(true);
    }

    constructor() public {}
}
