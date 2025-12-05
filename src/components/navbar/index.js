import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import { Wrapper, Links, MobileLinks, ThemeToggle } from "./styled";
import Logo from "../logo";
import { Link } from "react-scroll";

const Sun = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="5"></circle>
		<line x1="12" y1="1" x2="12" y2="3"></line>
		<line x1="12" y1="21" x2="12" y2="23"></line>
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
		<line x1="1" y1="12" x2="3" y2="12"></line>
		<line x1="21" y1="12" x2="23" y2="12"></line>
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
	</svg>
);

const Moon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
	</svg>
);

const App = () => {
	const themeState = useTheme();
	const [showMenu, setShowMenu] = React.useState(false);
	return (
		<>
			<Wrapper>
				<a href="/">
					<Logo
						fill={themeState.gray ? "#F8F8F9" : "#0F172A"}
						stroke={themeState.gray ? "#0F172A" : "#FFFFFF"}
						color={themeState.gray ? "#0F172A" : "#FFFFFF"}
					/>
				</a>
				<div className="burger-btn" onClick={() => setShowMenu(!showMenu)}>
					<div className="lines" />
					<div className="lines" />
					<div className="lines" />
				</div>
				<Links>
					<div className="resume">
						<a
							href="https://docs.google.com/document/d/13_JICexGsVjDYUIjzKCl5jpbA48vcccx-zBTBNXR_aU/edit?usp=sharing"
							target="_blank"
						>
							Résumé
						</a>
					</div>
					{/* <div className="resume">
						<Link to="projects" spy={true} smooth={true}>
							Projects
						</Link>
					</div> */}
					<div className="resume">
						<Link to="#">Contact Me</Link>
					</div>
					<ThemeToggle onClick={() => themeState.toggle()}>
						{!themeState.gray ? <Sun /> : <Moon />}
					</ThemeToggle>
				</Links>
			</Wrapper>

			<MobileLinks showMenu={showMenu}>
				<span onClick={() => setShowMenu(!showMenu)}>X</span>
				<div className="resume">
					<a
						href="https://docs.google.com/document/d/13_JICexGsVjDYUIjzKCl5jpbA48vcccx-zBTBNXR_aU/edit?usp=sharing"
						target="_blank"
					>
						Résumé
					</a>
				</div>
				{/* <div className="resume">
					<Link to="projects" spy={true} smooth={true}>
						Projects
					</Link>
				</div> */}
				<div className="resume">
					<Link to="#" spy={true} smooth={true}>
						Contact Me
					</Link>
				</div>
				<ThemeToggle onClick={() => themeState.toggle()}>
					{!themeState.gray ? <Sun /> : <Moon />}
				</ThemeToggle>
			</MobileLinks>
		</>
	);
};

export default App;
