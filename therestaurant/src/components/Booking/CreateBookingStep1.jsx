import React from 'react';
import "./CreateBooking.css";

export const CreateBookingStep1 = ({ booking, handleOnChange, handleNextStep }) => {
    const guests = [1, 2, 3, 4, 5, 6]; // array of guest options
  
    return (
      <>
        <form className="bookingForm">
          <label htmlFor="numberOfGuests">Antal Gäster</label>
          <div className="guest-buttons">
            {guests.map((guestsCount) => (
              <button className="GuestButtonClass" id='GuestButton' key={guestsCount} onClick={() => {
                handleOnChange({ target: { name: "numberOfGuests", value: guestsCount }});
                handleNextStep();
              }}>
                {guestsCount}
              </button>
            ))}
          </div>
        </form>
      </>
    );
  };
  