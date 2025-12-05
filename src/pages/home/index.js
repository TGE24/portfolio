import React from "react";
import {
	Wrapper,
	VerticalLine,
	Circle,
	Socials,
	Description,
	Image,
	Container,
	MobileSocials,
} from "./styled";
import Navbar from "../../components/navbar";
import Arrow from "../../assets/arrow.png";
import Pic from "../../assets/2.jpeg";
import { useTheme } from "../../theme/ThemeContext";

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
								<a
									href="https://www.linkedin.com/in/thankgod-egbo/"
									target="_blank"
								>
									LinkedIn
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
										Senior Software Developer <hr />
									</h6>
								</span>
								<span>
									<hr className="hr" style={{ width: "120px" }} />
								</span>
							</div>
							<div className="content">
								<Description>
									<h1>
										I am a Senior Frontend Developer and i'll love to work with
										you!
									</h1>
									<a
										href="https://docs.google.com/document/d/13_JICexGsVjDYUIjzKCl5jpbA48vcccx-zBTBNXR_aU/edit?usp=sharing"
										target="_blank"
									>
										<h4>
											View Résumé{" "}
											<img
												src={Arrow}
												alt="Profile"
												style={{ cursor: "pointer" }}
											/>
										</h4>
									</a>
								</Description>
								<div className="image-cont">
									<Image src={Pic} alt="My Header" />
								</div>
							</div>
							<MobileSocials>
								<Circle />
								<Socials>
									<a
										href="https://www.linkedin.com/in/thankgod-egbo/"
										target="_blank"
									>
										LinkedIn
									</a>
								</Socials>
								<Socials>
									<a href="https://github.com/TGE24" target="_blank">
										GitHub
									</a>
								</Socials>
							</MobileSocials>
						</div>
					</div>
				</div>
				{/* <Projects /> */}
			</Container>
		</Wrapper>
	);
};

export default App;
