import React from "react";
import { Project, ProjectsCont } from "./styled";
import Projects from "../../projects";

const App = () => {
	return (
		<ProjectsCont id="projects">
			<h1 style={{ padding: "34px 0" }}>PROJECTS</h1>
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
							{project.url && (
								<Project.Link to={{ pathname: project.url }} target="__blank">
									<h4>View</h4>
								</Project.Link>
							)}
						</div>
						<p className="description">{project.description}</p>
					</Project.Description>
				</Project>
			))}
		</ProjectsCont>
	);
};

export default App;
