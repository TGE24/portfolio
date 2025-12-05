import styled from "@emotion/styled";

export const Wrapper = styled("div")`
	background: ${(props) => props.theme.background};
	display: flex;
	flex-direction: column;
	margin: auto;
	height: 100vh;
	width: 100%;
	overflow-x: hidden;
	h1 {
		color: ${(props) => props.theme.body};
		margin: 0;
		font-weight: 700;
		letter-spacing: -0.02em;
	}
	p {
		color: ${(props) => props.theme.body};
	}
	h4 {
		color: ${(props) => props.theme.body};
		transition: all 0.3s ease;
	}
	@media (max-width: 767px) {
		height: 100vh;
		width: 100%;
	}
`;

export const VerticalLine = styled("div")`
	height: 23%;
	border-left: 2px solid ${(props) => props.theme.borderColor};
	margin-left: 11px;
	transition: border-color 0.3s ease;
	@media (max-width: 1024px) {
		height: 20%;
	}
	@media (max-width: 767px) {
		display: none;
	}
`;

export const Circle = styled("div")`
	border: 2px solid ${(props) => props.theme.accent};
	border-radius: 100%;
	height: 25px;
	width: 25px;
	margin: 50px 0;
	transition: all 0.3s ease;
	box-shadow: 0 0 12px ${(props) => props.theme.accent}33;
	flex-shrink: 0;
	&:hover {
		box-shadow: 0 0 20px ${(props) => props.theme.accent}66;
	}
	@media (max-width: 1024px) {
		height: 20px;
		width: 20px;
		margin: 35px 0;
	}
	@media (max-width: 767px) {
		height: 18px;
		width: 18px;
		margin: 25px 0;
	}
`;

export const Socials = styled("h5")`
	writing-mode: vertical-lr;
	transform: rotate(180deg);
	height: 11%;
	min-height: 60px;
	color: ${(props) => props.theme.secondaryText};
	font-size: 13px;
	font-weight: 600;
	letter-spacing: 0.05em;
	a {
		color: inherit;
		text-decoration: none;
		transition: color 0.3s ease;
		&:hover {
			color: ${(props) => props.theme.accent};
		}
	}
	@media (max-width: 1024px) {
		font-size: 12px;
		min-height: 50px;
	}
	@media (max-width: 767px) {
		writing-mode: horizontal-tb;
		transform: none;
		height: auto;
		min-height: auto;
		font-size: 14px;
		font-weight: 600;
		margin: 0;
		padding: 0;
		letter-spacing: 0.5px;
		a {
			display: flex;
			align-items: center;
		}
	}
`;

export const Image = styled("img")`
	width: 375px;
	height: 375px;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
	transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
	filter: contrast(1.1) brightness(1.05);
	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
	}
	@media (max-width: 1024px) {
		width: 300px;
		height: 300px;
	}
	@media (max-width: 1024px) and (min-width: 768px) {
		width: 250px;
		height: 250px;
	}
	@media (max-width: 767px) {
		width: 100%;
		height: auto;
		max-width: 350px;
	}
`;

export const Description = styled("div")`
	width: 50%;
	padding: 22px 0;
	h1 {
		font-size: 3.5rem;
		line-height: 1.2;
		margin-bottom: 1.5rem;
		color: ${(props) => props.theme.body};
	}
	a {
		text-decoration: none;
	}
	h4 {
		color: ${(props) => props.theme.accent};
		font-size: 1.125rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		transition: all 0.3s ease;
		cursor: pointer;
		&:hover {
			gap: 12px;
			img {
				transform: translateX(4px);
			}
		}
		img {
			position: relative;
			margin-left: 20px;
			transition: transform 0.3s ease;
		}
	}
	@media (max-width: 1024px) {
		width: 55%;
		h1 {
			font-size: 2.8rem;
		}
	}
	@media (max-width: 1024px) and (min-width: 768px) {
		width: 60%;
		h1 {
			font-size: 2.2rem;
			margin-bottom: 1rem;
		}
	}
	@media (max-width: 767px) {
		width: 100%;
		h1 {
			font-size: 2.5rem;
			margin-top: 0;
			line-height: 1.3;
			margin-bottom: 1rem;
		}
		h4 {
			margin: 0;
			font-size: 1rem;
		}
	}
`;

export const Container = styled("div")`
	width: 100%;
	margin: 10px auto;
	height: 100%;
	.inner-cont {
		margin-top: 76px;
		display: flex;
		width: 100%;
		.body {
			margin: 0 auto;
			width: 1124px;
			position: relative;
			.content-cont {
				padding: 0 0 0 90px;
			}
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 3rem;
				h5 {
					color: ${(props) => props.theme.body};
					margin: 0;
					font-size: 18px;
					font-weight: 600;
					letter-spacing: 0.5px;
				}
				h6 {
					color: ${(props) => props.theme.secondaryText};
					margin: 0;
					display: flex;
					align-items: center;
					font-size: 13px;
					font-weight: 500;
					letter-spacing: 0.5px;
					hr {
						border: none;
						border-top: 1px solid ${(props) => props.theme.borderColor};
						margin: 0 10px;
						width: 120px;
					}
				}
			}
			.content {
				display: flex;
				align-items: center;
			}
		}
	}
	.image-cont {
		width: 50%;
		display: flex;
		justify-content: flex-end;
	}
	@media (max-width: 1024px) {
		.inner-cont {
			.body {
				width: 90%;
				.content-cont {
					padding: 0 0 0 40px;
				}
			}
		}
	}
	@media (max-width: 767px) {
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
		.inner-cont {
			margin-top: 60px;
			flex-direction: column;
			.body {
				width: 100%;
				position: static;
				.socials {
					display: none;
				}
				.content-cont {
					padding: 0 !important;
					display: flex;
					flex-direction: column;
				}
			}
		}
		.image-cont {
			width: 100%;
			display: flex;
			justify-content: center;
			margin-top: 2rem;
			margin-bottom: 1rem;
			position: relative;
			z-index: 5;
		}
		.header {
			padding-left: 0;
			flex-direction: column;
			align-items: flex-start;
			margin-bottom: 1.5rem;
		}
		.content {
			flex-direction: column;
			padding-left: 0;
			width: 100%;
		}
		.content-cont {
			padding: 0 !important;
			.hr {
				display: none;
			}
		}
	}
`;

export const MobileSocials = styled("div")`
	display: none;

	@media (max-width: 767px) {
		display: flex;
		flex-direction: row;
		height: auto;
		justify-content: center;
		align-items: center;
		gap: 20px;
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid ${(props) => props.theme.borderColor};
	}
`;
