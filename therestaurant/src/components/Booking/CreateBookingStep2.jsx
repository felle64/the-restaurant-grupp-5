import React from "react";
import "./CreateBooking.css";

export const CreateBookingStep2 = ({
  booking,
  handleOnChange,
  handleNextStep,
  handlePreviousStep,
  lastName,
}) => {
  return (
    <>
      <form className="bookingForm">
        <label htmlFor="firstName">Förnamn:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="firstNameClass"
          value={booking.firstName}
          onChange={handleOnChange}
          required
        />
        <label htmlFor="lastName">Efternamn:</label>
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
          <button
            id="prevButton"
            className="prevButtonClass"
            onClick={handlePreviousStep}
          >
            Tilbaka
          </button>
          <button
            id="nextButton"
            className="nextButtonClass"
            onClick={handleNextStep}
          >
            Nästa
          </button>
        </div>
      </form>
    </>
  );
};
