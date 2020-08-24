import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  h1 {
    color: ${(props) => props.theme.body};
    margin: 0;
  }
`;
