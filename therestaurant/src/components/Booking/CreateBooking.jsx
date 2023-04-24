import { Booking } from "../../modules/Booking";
import { useState} from "react";
import "./CreateBooking.css";
import { HandleCreateBooking } from "../../services/HandelCreateBooking";
import {CreateBookingStep1} from "./CreateBookingStep1";
import { CreateBookingStep2 } from "./CreateBookingStep2";
import { CreateBookingStep3 } from "./CreateBookingStep3";
import { CreateBookingStep4 } from "./CreateBookingStep4";

export const CreateBooking = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [booking, setBooking] = useState(new Booking(1, "", " " , "1", 1));
    const [isLoading, setIsLoading] = useState(false);
    const [bookingDone, setBookingDone] = useState(false);


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setBooking((prevBooking) => {
          if (name === "firstName") {
            return { ...prevBooking, name: `${value} ${prevBooking.lastName}`, firstName: value };
          }
          if (name === "lastName") {
            return { ...prevBooking, name: `${prevBooking.firstName} ${value}`, lastName: value };
          }
          return { ...prevBooking, [name]: value };
        });
      };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log(booking);
        await HandleCreateBooking(booking);
        setIsLoading(false);
        setBookingDone(true);

    };

    const handleNextStep = () => { setCurrentStep(currentStep + 1); };
    const handlePreviousStep = () => { setCurrentStep(currentStep - 1); };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <CreateBookingStep1 
                        booking={booking} 
                        handleOnChange={handleOnChange} 
                        handleNextStep={handleNextStep}/>;
                case 2:
                    return <CreateBookingStep2 
                    booking={booking} 
                    handleOnChange={handleOnChange} 
                    handleNextStep={handleNextStep} 
                    handlePreviousStep={handlePreviousStep} 
                    />;    
                case 3:
                    return <CreateBookingStep3 
                    booking={booking} 
                    handleOnChange={handleOnChange} 
                    handleNextStep={handleNextStep} 
                    handlePreviousStep={handlePreviousStep} 
                    />;
                case 4:
                    return <CreateBookingStep4 
                    booking={booking} 
                    handleOnChange={handleOnChange} 
                    handleNextStep={handleNextStep} 
                    handlePreviousStep={handlePreviousStep} 
                    handleOnSubmit={handleOnSubmit}
                    />;
                default:
                    return null;
                }
            };
   

    if (bookingDone) {
        return (
            <div className="booking booking-completed">
                <h1>Din bokning är bekräftad!</h1>
                <div className="booking-info">
                <p className="booking-text">Välkommen {booking.name}</p>
                <p className="booking-text">Antal gäster: {booking.numberOfGuests}</p>
                <p className="booking-text">datum: {booking.date}</p>
                <p className="booking-text">Klockan: {booking.time}:00</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="booking">
        <h1>Bokning</h1>
         {renderStep()}
         </div>
    )

}
/* 
    return (
        <div className="booking">
            {isLoading ? (
                <div className="loading-screen">
                    <p className="loading-screen-text">Din Bokning behandlas...</p>
                </div>
            ) : (
            <>
            <h1>Bokning</h1>
            <form onSubmit={handleOnSubmit} className="bookingForm">
                <label htmlFor="numberOfGuests">Antal Gäster</label>
                <input
                    type="number"
                    name="numberOfGuests"
                    id="numberOfGuests"
                    value={booking.numberOfGuests}
                    onChange={handleOnChange}
                    max={6}
                    min={1}
                />
                <label htmlFor="name">Namn</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={booking.name}
                    onChange={handleOnChange}
                />
                <label htmlFor="date">Vilket Datum</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={booking.date}
                    onChange={handleOnChange}
                />
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
                    <button type="submit">Boka</button>
                </form>
                </>
            )}
        </div>
    );
}; */