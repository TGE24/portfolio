import React from "react";
import {
  Wrapper,
  VerticalLine,
  Circle,
  Socials,
  Description,
  Image,
} from "./styled";
import Navbar from "../../components/navbar";
import Arrow from "../../assets/arrow.png";
import Pic from "../../assets/img.jpg";
import Pic2 from "../../assets/img2.jpg";
import { useTheme } from "../../theme/ThemeContext";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 90%;
  margin: 10px auto;
  .inner-cont {
    margin-top: 47px;
    display: flex;
    width: 100%;
    .body {
      margin: 0 auto;
      width: 90%;
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

const App = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <Container>
        <Navbar />
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
                    Life would be so much easier if we only had the
                    source code.
                  </h1>
                  <h4>
                    View Profile <img src={Arrow} alt="Profile" />{" "}
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
                  {themeState.gray && (
                    <Image src={Pic2} alt="My Header" />
                  )}
                  {!themeState.gray && (
                    <Image src={Pic} alt="My Header" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default App;
