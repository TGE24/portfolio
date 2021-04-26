import styled from "@emotion/styled";

export const Wrapper = styled("div")`
	background: ${(props) => props.theme.background};
	display: flex;
	flex-direction: column;
	margin: auto;
	height: auto;
	h1 {
		color: ${(props) => props.theme.body};
		margin: 0;
	}
	p {
		color: ${(props) => props.theme.body};
	}
	h4 {
		color: ${(props) => props.theme.body};
	}
	@media (max-width: 767px) {
		height: 100%;
	}
`;

export const VerticalLine = styled("div")`
	height: 23%;
	border-left: 2px solid white;
	border-color: ${(props) => props.theme.body};
	margin-left: 11px;
	@media (max-width: 767px) {
		height: 21%;
	}
`;

export const Circle = styled("div")`
	border: 2px solid white;
	border-color: ${(props) => props.theme.body};
	border-radius: 100%;
	height: 25px;
	width: 25px;
	margin: 50px 0;
`;

export const Socials = styled("h5")`
	writing-mode: vertical-lr;
	transform: rotate(180deg);
	height: 11%;
	color: ${(props) => props.theme.body};
	a {
		color: inherit;
	}
	@media (max-width: 767px) {
		height: 7%;
	}
`;

export const Image = styled("img")`
	height: 375px;
	top: 79px;
	left: 91px;
`;

export const Description = styled("div")`
	width: 50%;
	padding: 22px 0;
	h1 {
		font-size: 3rem;
		margin-top: 55px;
		line-height: 2;
	}
	h4 {
		color: ${(props) => props.theme.body};
		img {
			position: relative;
			top: 12px;
			left: 20px;
		}
	}
	@media (max-width: 767px) {
		width: 100%;
		h1 {
			margin-top: 0;
			line-height: 1.6;
		}
		h4 {
			margin: 0;
		}
	}
`;

export const Container = styled("div")`
	width: 1200px;
	margin: 10px auto;
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
				h5 {
					color: ${(props) => props.theme.body};
					margin-bottom: 0.5em;
				}
				h6 {
					color: #9b9a98;
					margin: 0;
					display: flex;
					hr {
						border-color: #9b9a98;
						margin-top: 8px;
						margin-left: 10px;
						width: 120px;
					}
				}
			}
			.content {
				display: flex;
			}
		}
	}
	@media (max-width: 767px) {
		width: 90%;
		.socials {
			left: -15px;
		}
		.image-cont {
			display: none !important;
		}
		.header {
			padding-left: 30px;
		}
		.content {
			flex-direction: column;
			padding-left: 30px;
		}
		.content-cont {
			padding: 0 !important;
			.hr {
				display: none;
			}
		}
	}
`;
