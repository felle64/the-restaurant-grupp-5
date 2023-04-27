
import React from "react";
import { useState, useEffect } from "react";
import "./CreateBooking.css";

export const CreateBookingStep4 = ({
	booking,
	handleOnChange,
	handleNextStep,
	handlePreviousStep,
	handleOnSubmit,
	getAvailableTables,
}) => {
	const [availableTables, setAvailableTables] = useState(
		getAvailableTables(booking.date, booking.time)
	);

	useEffect(() => {
		setAvailableTables(getAvailableTables(booking.date, booking.time));
	}, [booking.date, booking.time, getAvailableTables]);

	return (
		<>
      <form className="bookingForm">
			<label htmlFor='time'>Vilken Tid</label>
			<select
				value={booking.time}
				onChange={handleOnChange}
				name='time'
				id='time'>
				{/* <option value=''>Välj tid</option> */}
				<option value={12}>12:00</option>
				<option value={20}>20:00</option>
			</select>
			
			<button
				className="prevButtonClass"
				type='submit'
				onClick={handleOnSubmit}>
				Boka
			</button>
			<button className="prevButtonClass" onClick={handlePreviousStep}>Previous</button>
			{/* <button onClick={handleNextStep}>Next</button> */}
			<p>Det finns {availableTables} bord kvar att boka vid den valda tiden.</p>
			
      </form>
		</>
	);
};
