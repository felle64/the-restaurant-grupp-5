

export const CreateBookingStep2 = ({ booking, handleOnChange, handleNextStep, handlePreviousStep, lastName }) => {

  
    

    return (
        <>
         <form className="bookingForm">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={booking.firstName}
            onChange={handleOnChange}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleOnChange}
            required
          />
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleNextStep}>Next</button>

          </form>
          </>

      );
      
}
