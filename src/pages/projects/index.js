import React from "react";
import { Wrapper } from "./styled";
import Navbar from "../../components/navbar";
import { useTheme } from "../../theme/ThemeContext";
import styled from "@emotion/styled";

const Container = styled("div")`
  width: 90%;
  margin: 10px auto;
`;

const App = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <Container>
        <Navbar />
      </Container>
    </Wrapper>
  );
};

export default App;
