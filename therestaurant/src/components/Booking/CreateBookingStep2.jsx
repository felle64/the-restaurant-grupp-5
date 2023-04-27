import React from 'react';
import "./CreateBooking.css";

export const CreateBookingStep2 = ({ booking, handleOnChange, handleNextStep, handlePreviousStep, lastName }) => {

  
    

    return (
        <>
         <form className="bookingForm">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="firstNameClass"
            value={booking.firstName}
            onChange={handleOnChange}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="lastNameClass"
            value={lastName}
            onChange={handleOnChange}
            required
          />
          <div className="slideButtons">
          <button id="prevButton" className="prevButtonClass" onClick={handlePreviousStep}>Previous</button>
          <button id="nextButton" className="nextButtonClass" onClick={handleNextStep}>Next</button>
          </div>
          </form>
          </>

      );
      
}
