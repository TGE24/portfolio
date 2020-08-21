import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  display: flex;
  .burger-btn {
    display: none;
    border: 2px solid white;
    border-radius: 2px;
    height: 30px;
    width: 30px;
    .lines {
      border: 1px solid white;
      margin: 5px;
    }
  }
  @media (max-width: 767px) {
    justify-content: space-between;
    .burger-btn {
      display: block;
      position: relative;
      top: 17px;
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
