import React from 'react';
import "./CreateBooking.css";

export const CreateBookingStep4 = ({ booking, handleOnChange, handleNextStep, handlePreviousStep, handleOnSubmit }) => {
  return (
    <>
    <form className="bookingForm">
        <label htmlFor="time">Vilken Tid</label>
                    <select
                        value={booking.time} 
                        onChange={handleOnChange}
                        name="time"
                        id="time"
                    >
                        <option 
                            value="">
                            Välj tid
                        </option>
                        <option 
                            value={12}>
                            12:00
                        </option>
                        <option
                            value={20}>
                            20:00
                        </option>

                    </select>
                    <div className="slideButtons">
                    <button type="submit"  className="prevButtonClass" onClick={handleOnSubmit}>Boka</button>
                    <button id="prevButton" className="prevButtonClass" onClick={handlePreviousStep}>Previous</button>
                    </div>
            </form>     
    </>
  );
};

/* 
import React, { useState } from 'react';

export const CreateBookingStep4 = ({ booking, handleOnChange, handlePreviousStep, handleOnSubmit }) => {
  const [tablesRemaining, setTablesRemaining] = useState(10);
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleOnSubmitWithTime = (e) => {
    e.preventDefault();
    if (selectedTime) {
      handleOnSubmit(e);
    } else {
      alert("Please select a time");
    }
  };

  return (
    <>
      <label htmlFor="time">Vilken Tid</label>
      <div className="time-buttons">
        <button onClick={() => handleTimeClick(12)}>12:00</button>
        <button onClick={() => handleTimeClick(20)}>20:00</button>
      </div>
      {selectedTime && (
        <p>Number of tables booked: {tablesRemaining}</p>
      )}
      <form className="bookingForm" onSubmit={handleOnSubmitWithTime}>
        <button type="submit">Boka</button>
        <button onClick={handlePreviousStep}>Previous</button>
      </form>
    </>
  );
};

*/