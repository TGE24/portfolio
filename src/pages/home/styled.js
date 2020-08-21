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
    font-size: 3.4rem;
    margin-top: 55px;
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
    }
    h4 {
      margin: 0;
    }
  }
`;
