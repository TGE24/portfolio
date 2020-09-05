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
      border-color: ${(props) => props.theme.body};
    }
  }
  @media (max-width: 767px) {
    justify-content: space-between;
    .burger-btn {
      display: block;
      border-color: ${(props) => props.theme.body};
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

export const MobileLinks = styled("div")`
  display: none;
  @media (max-width: 767px) {
    visibility: ${({ showMenu }) =>
      showMenu ? "visible" : "hidden"};
    opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.body};
    position: absolute;
    width: inherit;
    text-align: center;
    height: -webkit-fill-available;
    top: 0;
    z-index: 999;
    justify-content: center;
    align-items: center;
    transition: opacity 600ms, visibility 600ms, height 300ms;
    span {
      position: absolute;
      top: 30px;
      font-size: 39px;
      right: 0;
    }
    div {
      margin: 0;
      a {
        color: ${(props) => props.theme.body};
      }
    }
    .resume {
      flex-basis: 100px;
      font-size: x-large;
    }
  }
`;
