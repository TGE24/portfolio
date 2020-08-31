import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import { Wrapper, Links, MobileLinks } from "./styled";
import Logo from "../logo";
import Light from "../../assets/light.png";
import Dark from "../../assets/dark.png";

const App = () => {
  const themeState = useTheme();
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <Wrapper>
        <a href="/">
          <Logo
            fill={themeState.gray ? "#F8F8F9" : "#1d1c21"}
            stroke={themeState.gray ? "#1d1c21" : "#FFFFFF"}
            color={themeState.gray ? "#1d1c21" : "#FFFFFF"}
          />
        </a>
        <div
          className="burger-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="lines" />
          <div className="lines" />
          <div className="lines" />
        </div>
        <Links>
          <div className="resume">
            <a
              href="https://docs.google.com/document/d/1Y-VlYT7vBQYnk4GyDgSBQ8Xx_a3EJ282bcAV7d7lLeo/edit?usp=sharing"
              target="_blank"
            >
              Résumé
            </a>
          </div>
          <div className="resume">
            <a href="/projects">Projects</a>
          </div>
          <div className="resume">
            <a href="#">Contact Me</a>
          </div>
          <div
            onClick={() => themeState.toggle()}
            style={{
              cursor: "pointer",
              position: "relative",
              top: "-7px",
            }}
          >
            {!themeState.gray ? (
              <img src={Light} alt="light-mode" height={30} />
            ) : (
              <img src={Dark} alt="light-mode" height={30} />
            )}
          </div>
        </Links>
      </Wrapper>

      <MobileLinks showMenu={showMenu}>
        <span onClick={() => setShowMenu(!showMenu)}>X</span>
        <div className="resume">
          <a
            href="https://docs.google.com/document/d/1Y-VlYT7vBQYnk4GyDgSBQ8Xx_a3EJ282bcAV7d7lLeo/edit?usp=sharing"
            target="_blank"
          >
            Résumé
          </a>
        </div>
        <div className="resume">
          <a href="/projects">Projects</a>
        </div>
        <div className="resume">
          <a href="#">Contact Me</a>
        </div>
        <div
          onClick={() => themeState.toggle()}
          style={{
            cursor: "pointer",
            position: "relative",
            top: "-7px",
          }}
        >
          {!themeState.gray ? (
            <img src={Light} alt="light-mode" height={30} />
          ) : (
            <img src={Dark} alt="light-mode" height={30} />
          )}
        </div>
      </MobileLinks>
    </>
  );
};

export default App;
