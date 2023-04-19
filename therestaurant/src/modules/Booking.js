export class Booking {
    numberOfGuests;
    name;
    date;
    time;
    restaurantId;

    constructor(numberOfGuests, name, date, time, restaurantId) {
        this.numberOfGuests = numberOfGuests
        this.name = name
        this.date = date
        this.time = time
        this.restaurantId = restaurantId
    }
}
