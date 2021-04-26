import React from "react";
import {
	Wrapper,
	VerticalLine,
	Circle,
	Socials,
	Description,
	Image,
	Container,
} from "./styled";
import Navbar from "../../components/navbar";
import Arrow from "../../assets/arrow.png";
import Pic from "../../assets/img.jpg";
import Pic2 from "../../assets/img2.jpg";
import { useTheme } from "../../theme/ThemeContext";
import Projects from "../projects";

const App = () => {
	const themeState = useTheme();

	return (
		<Wrapper>
			<Navbar />
			<Container>
				<div className="inner-cont">
					<div className="body">
						<div
							className="socials"
							style={{ position: "absolute", height: "100%" }}
						>
							<VerticalLine />
							<Socials>
								<a href="https://twitter.com/TGE_24" target="_blank">
									Twitter
								</a>
							</Socials>
							<Circle />
							<Socials>
								<a href="https://github.com/TGE24" target="_blank">
									GitHub
								</a>
							</Socials>
							<VerticalLine />
						</div>
						<div className="content-cont">
							<div className="header">
								<span>
									<h5>ThankGod Egbo</h5>
									<h6>
										Software Developer <hr />
									</h6>
								</span>
								<span>
									<hr className="hr" style={{ width: "120px" }} />
								</span>
							</div>
							<div className="content">
								<Description>
									<h1>
										I am{" "}
										<span
											style={{ textTransform: "uppercase", fontSize: "2.6rem" }}
										>
											ThankGod Egbo
										</span>
										, a Frontend Developer and i'll love to work with you!
									</h1>
									<h4>
										View Résumé{" "}
										<img
											src={Arrow}
											alt="Profile"
											style={{ cursor: "pointer" }}
										/>
									</h4>
								</Description>
								<div
									className="image-cont"
									style={{
										width: "50%",
										display: "flex",
										justifyContent: "flex-end",
									}}
								>
									{themeState.gray && <Image src={Pic2} alt="My Header" />}
									{!themeState.gray && <Image src={Pic} alt="My Header" />}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Projects />
			</Container>
		</Wrapper>
	);
};

export default App;
