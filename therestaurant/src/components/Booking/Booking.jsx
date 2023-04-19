import { CreateBooking } from "../../modules/CreateBooking";
import { useState, useEffect} from "react";
import { CONTRACT_ADDRESS, ABI_ADDRESS } from "../../config";
import { account, contract} from "../AdminView/AdminView";
import {handleCreateBooking} from "../AdminView/AdminView";


import "./Booking.css";

export const Booking = (props) => {
    const [booking, setBooking] = useState(new CreateBooking(0, "", "" , "",));


    


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setBooking({ ...booking, [name]: value, });
        
    };

async function handleOnSubmit(event, props) {
    event.preventDefault()
    props.handleCreateBooking(booking.numberOfGuests, booking.name, booking.date, booking.time, booking.restaurantId)
}

    

    return (
        <div className="booking">
            <h1>Welcome to Booking</h1>
            <form onSubmit={handleOnSubmit} className="bookingForm">
                <label htmlFor="numberOfGuests">Antal Gäster</label>
                <input
                    type="number"
                    name="numberOfGuests"
                    id="numberOfGuests"
                    value={booking.numberOfGuests}
                    onChange={handleOnChange}
                    max={6}
                    min={1}
                />
                <label htmlFor="name">Namn</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={booking.name}
                    onChange={handleOnChange}
                />
                <label htmlFor="date">Vilket Datum</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={booking.date}
                    onChange={handleOnChange}
                />
                <label htmlFor="time">Vilken Tid</label>
                    <select
                        value={booking.time} 
                        onChange={handleOnChange}
                        name="time"
                        id="time"
                    >
                        <option 
                            value="12:00">
                            12:00
                        </option>
                        <option
                            value="20:00">
                            20:00
                        </option>

                    </select>
                    <button onClick={props.onCreateRestaurant}>Reserve your table</button>
                </form>
        </div>
    );
}