import React from 'react';

export const CreateBookingStep4 = ({ booking, handleOnChange, handleNextStep, handlePreviousStep, handleOnSubmit }) => {
  return (
    <>
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
                    <button type="submit" onClick={handleOnSubmit}>Boka</button>
                    <button onClick={handlePreviousStep}>Previous</button>
                    <button onClick={handleNextStep}>Next</button>
    </>
  );
};

