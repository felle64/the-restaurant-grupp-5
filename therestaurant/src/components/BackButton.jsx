import { useNavigate, useLocation } from "react-router-dom";

export const BackButton = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const goBack = () => {
		navigate("/");
	};

	if (location.pathname === "/") {
		return null;
	}

	return (
		<button
			className='back-button'
			onClick={goBack}>
			Hem
		</button>
	);
};
