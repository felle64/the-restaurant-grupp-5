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

    const handleNextStep = () => {
        const form = document.querySelector('form');
        if (form.checkValidity()) {
          setCurrentStep(currentStep + 1);
        } else {
          form.reportValidity();
        }
      };

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
*/