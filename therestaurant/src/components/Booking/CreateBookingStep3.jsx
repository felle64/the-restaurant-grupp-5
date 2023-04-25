import React from 'react';

export const CreateBookingStep3 = ({ booking, handleOnChange, handleNextStep, handlePreviousStep }) => {
  return (
    <>
      <label htmlFor="date">Vilket Datum</label>
      <input
        type="date"
        name="date"
        id="date"
        value={booking.date}
        onChange={handleOnChange}
      />
      <button onClick={handlePreviousStep}>Previous</button>
      <button onClick={handleNextStep}>Next</button>
    </>
  );
};

