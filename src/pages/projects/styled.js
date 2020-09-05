import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  margin: auto;
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

export const ProjectsCont = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 10px;
  }
`;

export const Project = styled("div")`
  width: 70%;
  height: 150px;
  display: flex;
  box-shadow: 9px 9px 8px 0 rgba(0, 0, 0, 0.2),
    9px -2px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 767px) {
    width: 100%;
  }
`;

Project.ImageCont = styled("div")`
  width: 15%;
  height: 100%;
  border-right: 2px solid ${(props) => props.theme.body};
  display: flex;
  align-items: center;
  padding: 40px;
  justify-content: center;
  img {
    height: inherit;
  }
`;
Project.Description = styled("div")`
  width: 80%;
  padding: 15px;
  .title {
    font-size: 20px;
    margin: 10px 0;
  }
  .description {
    text-align: justify;
    margin: 10px 0;
  }
  @media (max-width: 767px) {
    .description {
      overflow-y: auto;
      height: 74px;
    }
  }
`;

Project.Link = styled("div")`
  width: 80px;
  display: flex;
  height: 30px;
  border: 2px solid ${(props) => props.theme.body};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
