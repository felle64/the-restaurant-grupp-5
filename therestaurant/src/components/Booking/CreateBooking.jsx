import { Booking } from "../../modules/Booking";
import { useState, useEffect } from "react";
import "./CreateBooking.css";
import { HandleCreateBooking } from "../../services/HandelCreateBooking";
import { CreateBookingStep1 } from "./CreateBookingStep1";
import { CreateBookingStep2 } from "./CreateBookingStep2";
import { CreateBookingStep3 } from "./CreateBookingStep3";
import { CreateBookingStep4 } from "./CreateBookingStep4";

export const CreateBooking = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [booking, setBooking] = useState(new Booking(1, "", " ", "1", 1));
	const [isLoading, setIsLoading] = useState(false);
	const [bookingDone, setBookingDone] = useState(false);
	const [bookings, setBookings] = useState({});

	const maxPerTable = 6;

	function personsPerTable(guests) {
		let tables = 0;
		let remainingGuests = guests;

		while (remainingGuests > 0) {
			tables++;
			remainingGuests -= maxPerTable;
		}

		console.log("Per bord:", guests, "gäster", tables);
		return tables;
	}

	useEffect(() => {
		const storedBookings = localStorage.getItem("bookings");
		if (storedBookings) {
			setBookings(JSON.parse(storedBookings));
		}
	}, []);

	const getAvailableTables = (date, time) => {
		let currentBookings = 0;
		if (bookings[date] && bookings[date][time]) {
			currentBookings = bookings[date][time];
		}
		return 15 - currentBookings;
	};

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setBooking((prevBooking) => {
			if (name === "firstName") {
				return {
					...prevBooking,
					name: `${value} ${prevBooking.lastName}`,
					firstName: value,
				};
			}
			if (name === "lastName") {
				return {
					...prevBooking,
					name: `${prevBooking.firstName} ${value}`,
					lastName: value,
				};
			}
			return { ...prevBooking, [name]: value };
		});
	};

	const handleOnSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		const availableTables = getAvailableTables(booking.date, booking.time);
		console.log("Bord:", availableTables);

		const numberOfTables = personsPerTable(booking.numberOfGuests);
		console.log(
			"Bord:",
			booking.numberOfGuests,
			"gäster",
			numberOfTables,
			"bord"
		);

		if (availableTables >= numberOfTables) {
			try {
				await HandleCreateBooking(booking);
				setBookingDone(true);
				setIsLoading(false);
				console.log(booking);

				setBookings((prevBookings) => {
					const newBookings = { ...prevBookings };
					if (!newBookings[booking.date]) {
						newBookings[booking.date] = {};
					}
					if (!newBookings[booking.date][booking.time]) {
						newBookings[booking.date][booking.time] = 0;
					}
					newBookings[booking.date][booking.time] += numberOfTables;
					console.log("Updaterad bookings:", newBookings);
					return newBookings;
				});
			} catch (error) {
				setIsLoading(false);
				console.error(error);
				alert("Ett fel uppstod vid bokningen");
			}
		} else {
			alert("Det finns inga bord lediga vid den tidpunkten");
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (JSON.stringify(bookings) === "{}") {
			return;
		}
		localStorage.setItem("bookings", JSON.stringify(bookings));
	}, [bookings]);

	useEffect(() => {
		console.log("bookingDone changed:", bookingDone);
	}, [bookingDone]);

	const handleNextStep = () => {
        const form = document.querySelector('form');
        if (form.checkValidity()) {
          setCurrentStep(currentStep + 1);
        } else {
          form.reportValidity();
        }
      };
	const handlePreviousStep = () => {
		setCurrentStep(currentStep - 1);
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<CreateBookingStep1
						booking={booking}
						handleOnChange={handleOnChange}
						handleNextStep={handleNextStep}
					/>
				);
			case 2:
				return (
					<CreateBookingStep2
						booking={booking}
						handleOnChange={handleOnChange}
						handleNextStep={handleNextStep}
						handlePreviousStep={handlePreviousStep}
					/>
				);
			case 3:
				return (
					<CreateBookingStep3
						booking={booking}
						handleOnChange={handleOnChange}
						handleNextStep={handleNextStep}
						handlePreviousStep={handlePreviousStep}
					/>
				);
			case 4:
				return (
					<CreateBookingStep4
						booking={booking}
						handleOnChange={handleOnChange}
						handlePreviousStep={handlePreviousStep}
						handleOnSubmit={handleOnSubmit}
						getAvailableTables={getAvailableTables}
					/>
				);
			default:
				return null;
		}
	};

	if (bookingDone) {
		return (
			<div className='booking booking-completed'>
				<h1>Din bokning är bekräftad!</h1>
				<div className='booking-info'>
					<p className='booking-text'>Välkommen {booking.name}</p>
					<p className='booking-text'>Antal gäster: {booking.numberOfGuests}</p>
					<p className='booking-text'>datum: {booking.date}</p>
					<p className='booking-text'>Klockan: {booking.time}:00</p>
				</div>
			</div>
		);
	}

	return (
		<div className='booking'>
			{isLoading ? (
				<div className='loading-screen'>
					<p className='loading-screen-text'>Din Bokning behandlas...</p>
				</div>
			) : (
				<>
					<h1>Bokning</h1>
					{renderStep()}
				</>
			)}
		</div>
	);
};
