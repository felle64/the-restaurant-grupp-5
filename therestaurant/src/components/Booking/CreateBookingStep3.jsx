import React from 'react';

export const CreateBookingStep3 = ({ booking, handleOnChange, handleNextStep, handlePreviousStep }) => {

  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  if (month < 10) {
      month = `0${month}`;
    }

  if (day < 10) {
      day = `0${day}`;
    }

  const todayFormatted = `${year}-${month}-${day}`;
  console.log(todayFormatted);

  return (
    <>
    <form className="bookingForm">
      <label htmlFor="date">Vilket Datum</label>
      <input
        type="date"
        name="date"
        id="date"
        value={booking.date}
        onChange={handleOnChange}
        min={todayFormatted}
        required
      />
      <button onClick={handlePreviousStep}>Previous</button>
      <button onClick={handleNextStep}>Next</button>
    </form>
    </>
  );
};

