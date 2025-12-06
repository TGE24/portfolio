interface PlaceholderImageProps {
	name: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ name }) => {
	return (
		<svg
			viewBox="0 0 860 586"
			className="w-full h-full"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Background gradient */}
			<defs>
				<linearGradient
					id="placeholderGradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="0%" style={{ stopColor: "#e5e7eb", stopOpacity: 1 }} />
					<stop
						offset="100%"
						style={{ stopColor: "#d1d5db", stopOpacity: 1 }}
					/>
				</linearGradient>
			</defs>

			<rect width="860" height="586" fill="url(#placeholderGradient)" />

			{/* Image icon */}
			<g transform="translate(430, 293)">
				{/* Frame */}
				<rect
					x="-60"
					y="-60"
					width="120"
					height="120"
					fill="none"
					stroke="#9ca3af"
					strokeWidth="3"
					rx="8"
				/>

				{/* Image symbol - mountain */}
				<circle cx="-30" cy="-25" r="12" fill="#9ca3af" />
				<path
					d="M -50 15 L -20 -15 L 10 10 L 40 -20 L 50 15"
					fill="none"
					stroke="#9ca3af"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>

			{/* Project name text */}
			<text
				x="430"
				y="500"
				textAnchor="middle"
				className="text-gray-600"
				fontSize="24"
				fontWeight="500"
				fill="#4b5563"
			>
				{name}
			</text>
		</svg>
	);
};

export default PlaceholderImage;
