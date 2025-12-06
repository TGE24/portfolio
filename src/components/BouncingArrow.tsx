import "../styles/bouncing-arrow.css";

const BouncingArrow = () => {
	return (
		<div className="flex items-end pb-8">
			<div className="flex  flex-col items-center absolute bottom-10 right-10">
				<svg
					className="chevron"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 9L12 15L18 9"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					className="chevron"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 9L12 15L18 9"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					className="chevron"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6 9L12 15L18 9"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};

export default BouncingArrow;
