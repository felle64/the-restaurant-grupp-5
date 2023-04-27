import React, { useState, useEffect } from "react";
import "./Gdpr.css";

export const Gdpr = () => {
	const [showing, setShowing] = useState(false);
	const [timer, setTimer] = useState(false);

	useEffect(() => {
		const Accepted = localStorage.getItem("gdprAnswer");
		if (!Accepted) {
			setShowing(true);

			const delay = setTimeout(() => {
				setTimer(true);
			}, 3000);

			return () => clearTimeout(delay);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("gdprAnswer", "true");
		setShowing(false);
	};

	return (
		showing &&
		timer && (
			<div className='gdpr'>
				<p>
					Vi använder cookies för att förbättra din upplevelse på vår webbplats.
					Genom att fortsätta använda webbplatsen godkänner du vår
					<a
						href='/policy'
						target='_blank'>
						integritetspolicy
					</a>
					.
				</p>
				<button
					onClick={handleAccept}
					className='gdpr-btn'>
					Jag förstår
				</button>
			</div>
		)
	);
};
