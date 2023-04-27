import "./Contact.css";
import { useState, useEffect } from "react";

export const Contact = () => {
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState(() => {
		const saved = localStorage.getItem("Form-Data");
		return saved ? JSON.parse(saved) : [];
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const message = e.target.message.value;

		setFormData([...formData, { name, email, message }]);
		setSubmitted(true);

		e.target.reset();
	};

	useEffect(() => {
		localStorage.setItem("Form-Data", JSON.stringify(formData));
	}, [formData]);

	return (
		<div className='contact-container'>
			{!submitted ? (
				<>
					<h1 className='contact-heading'>Kontakta oss</h1>
					<form
						className='contact-form'
						onSubmit={handleSubmit}>
						<label htmlFor='name'>Namn:</label>
						<input
							type='text'
							id='name'
							name='name'
							required
						/>

						<label htmlFor='email'>E-post:</label>
						<input
							type='email'
							id='email'
							name='email'
							required
						/>

						<label htmlFor='message'>Meddelande:</label>
						<textarea
							id='message'
							name='message'
							required
						/>

						<button type='submit'>Skicka</button>
					</form>
				</>
			) : (
				<div className='contact-completed'>
					<h1>Tack för din feedback!</h1>
					<p>
						Vi värdesätter våra kunders synpunkter och kommer att granska ditt
						meddelande noga.
					</p>
					<br />
					<p>Om du vill kontakta oss direkt via telefon kan du nå oss på:</p>

					<p className='completed-phone'>123 456 789</p>
				</div>
			)}
		</div>
	);
};
