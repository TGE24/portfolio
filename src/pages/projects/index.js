import React from "react";
import { Wrapper, Project, ProjectsCont } from "./styled";
import Navbar from "../../components/navbar";
import { useTheme } from "../../theme/ThemeContext";
import styled from "@emotion/styled";
import Projects from "../../projects";

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
        <ProjectsCont>
          {Projects.map((project, index) => (
            <Project key={index}>
              <Project.ImageCont>
                <img src={project.logo} alt={project.name} />
              </Project.ImageCont>
              <Project.Description>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h1 className="title">{project.name}</h1>
                  <Project.Link>
                    <h4>View</h4>
                  </Project.Link>
                </div>
                <p className="description">{project.description}</p>
              </Project.Description>
            </Project>
          ))}
        </ProjectsCont>
      </Container>
    </Wrapper>
  );
};

export default App;
