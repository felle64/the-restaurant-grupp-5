

export const CreateBookingStep1 = ({ booking, handleOnChange, handleNextStep }) => {


    return (<>
    

            <form className="bookingForm">
                <label htmlFor="numberOfGuests">Antal Gäster</label>
                <input
                    type="number"
                    name="numberOfGuests"
                    id="numberOfGuests"
                    value={booking.numberOfGuests}
                    onChange={handleOnChange}
                    max={6}
                    min={1}
                    required
                />
            <button onClick={handleNextStep}>Nästa</button>
           </form>

    </>)
}
