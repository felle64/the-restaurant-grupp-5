import "./Contact.css";

export const Contact = () => {
	return (
		<div className='contact-container'>
			<h1 className='contact-heading'>Kontakta oss</h1>
			<form className='contact-form'>
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
		</div>
	);
};
