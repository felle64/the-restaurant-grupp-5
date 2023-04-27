import { Booking } from "../../modules/Booking";
import { useState, useEffect } from "react";
import "./CreateBooking.css";
import { HandleCreateBooking } from "../../services/HandelCreateBooking";
import { CreateBookingStep1 } from "./CreateBookingStep1";
import { CreateBookingStep2 } from "./CreateBookingStep2";
import { CreateBookingStep3 } from "./CreateBookingStep3";
import { CreateBookingStep4 } from "./CreateBookingStep4";
import { GetAllBookings } from "../../services/getAllBookings";

export const CreateBooking = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [booking, setBooking] = useState(new Booking(1, "", " ", "1", 1));
	const [isLoading, setIsLoading] = useState(false);
	const [bookingDone, setBookingDone] = useState(false);
	const [bookings, setBookings] = useState([]);
	const [bookedTables, setBookedTables] = useState([]);

	const restaurantId = 1;

	useEffect(() => {
		async function fetchBookings() {
			const fetchedBookings = await GetAllBookings(restaurantId);
			setBookings(fetchedBookings);
		}

		fetchBookings();
	}, []);

	const getAvailableTables = (date, time) => {
		const totalTables = 15;
		const bookingsForDateTime = bookings.filter(
			(booking) => booking.date === date && booking.time === time
		);

		const numberOfBookings = bookingsForDateTime.length;
		const availableTables = totalTables - numberOfBookings;
		return availableTables;
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

		if (availableTables) {
			try {
				await HandleCreateBooking(booking);
				setBookingDone(true);
				setIsLoading(false);
				console.log(booking);
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
		async function fetchBookedTables() {
			const fetchedBookings = await GetAllBookings(restaurantId);
			const fetchedBookedTables = fetchedBookings.map(
				(booking) => booking.tableNumber
			);
			setBookedTables(fetchedBookedTables);
		}

		fetchBookedTables();
	}, []);

	const handleNextStep = () => {
		const form = document.querySelector("form");
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
						bookings={bookings}
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
					<p className='booking-text'>Datum: {booking.date}</p>
					<p className='booking-text'>Klockan: {booking.time}:00</p>
				</div>
			</div>
		);
	}

	return (
		<div className='booking'>
			{isLoading ? (
				<div className='loading-screen'>
					<p className='loading-screen-text'>Din bokning behandlas...</p>
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
