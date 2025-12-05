import styled from "@emotion/styled";

export const Wrapper = styled("div")`
	display: flex;
	margin: 0 auto;
	width: 100%;
	.burger-btn {
		display: none;
		border: 2px solid white;
		border-radius: 2px;
		height: 30px;
		width: 30px;
		.lines {
			border: 1px solid white;
			margin: 5px;
			border-color: ${(props) => props.theme.body};
		}
	}
	@media (max-width: 767px) {
		justify-content: space-between;
		width: auto;
		margin: 0 20px;
		.burger-btn {
			display: block;
			border-color: ${(props) => props.theme.body};
			position: relative;
			/* top: 17px; */
			margin: auto 0;
		}
	}
`;

export const Links = styled("div")`
	display: flex;
	color: ${(props) => props.theme.body};
	width: 100%;
	justify-content: flex-end;
	padding: 36px;
	a {
		color: inherit;
	}
	div {
		margin: 0;
		padding: 10px;
	}
	.resume {
		flex-basis: 100px;
		cursor: pointer;
	}
	.contact {
		border: 2px solid black;
		border-color: ${(props) => props.theme.body};
		height: min-content;
		padding: 10px;
		border-radius: 16px;
		flex-basis: 100px;
		margin-right: 30px;
	}
	@media (max-width: 767px) {
		display: none;
	}
`;

export const MobileLinks = styled("div")`
	display: none;
	@media (max-width: 767px) {
		visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
		opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
		display: flex;
		flex-direction: column;
		background: ${(props) => props.theme.background};
		color: ${(props) => props.theme.body};
		position: absolute;
		width: 100%;
		text-align: center;
		height: -webkit-fill-available;
		top: 0;
		z-index: 999;
		justify-content: center;
		align-items: center;
		transition: opacity 600ms, visibility 600ms, height 300ms;
		span {
			position: absolute;
			top: 30px;
			font-size: 39px;
			right: 0;
		}
		div {
			margin: 0;
			a {
				color: ${(props) => props.theme.body};
			}
		}
		.resume {
			flex-basis: 100px;
			font-size: x-large;
		}
	}
`;

export const ThemeToggle = styled("button")`
	background: none;
	border: none;
	cursor: pointer;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.body};
	transition: all 0.3s ease;

	svg {
		transition: transform 0.3s ease;
	}

	&:hover svg {
		transform: rotate(20deg);
	}

	@media (max-width: 767px) {
		svg {
			width: 28px;
			height: 28px;
		}
	}
`;
