import { CreateBooking } from "../../modules/CreateBooking";
import { useState, useEffect } from "react";
import "./Booking.css";



export const Booking = () => {
    const [booking, setBooking] = useState(new CreateBooking(null, "", "" , ""));

    useEffect(() => {
        console.log(booking);
    }, [booking]);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setBooking({ ...booking, [name]: value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(booking);
    };

    return (
        <div className="booking">
            <h1>Booking</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="numberOfGuests">Antal Gäster</label>
                <input
                    type="number"
                    name="numberOfGuests"
                    id="numberOfGuests"
                    value={booking.numberOfGuests}
                    onChange={handleOnChange}
                />
                <label htmlFor="name">Namn</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={booking.name}
                    onChange={handleOnChange}
                />
                <label htmlFor="date">Datum</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={booking.date}
                    onChange={handleOnChange}
                />
                <label htmlFor="time">Tid</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    value={booking.time}
                    onChange={handleOnChange}
                />
                <button type="submit">Boka</button>
                </form>
        </div>
    );
}