export class CreateBooking {
    numberOfGuests;
    name;
    date;
    time;
    restaurantId;

    constructor(numberOfGuests, name, date, time) {
        this.numberOfGuests = numberOfGuests
        this.name = name
        this.date = date
        this.time = time
        this.restaurantId = 1
    }
}
