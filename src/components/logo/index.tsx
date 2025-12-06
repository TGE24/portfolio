import "./index.css";

const Logo = () => {
	return (
		<svg
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			width="90"
			height="70"
			viewBox="0 0 140 110"
		>
			<g>
				<rect
					className="path"
					x="30"
					y="15"
					width="80"
					height="80"
					fill={"#F8F8F9"}
					stroke={"#0F172A"}
					strokeWidth="4"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
				<text
					x="70"
					y="60"
					fill={"#0F172A"}
					fontSize="2.5rem"
					className="text"
					textAnchor="middle"
					dominantBaseline="middle"
				>
					TG
				</text>
			</g>
		</svg>
	);
};

export default Logo;
