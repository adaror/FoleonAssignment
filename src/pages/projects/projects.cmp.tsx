import React from "react";
import ProjectCard from "../../components/project-card/project-card.cmp";
import { useProjectStore } from "../../stores/projects.store";
import { config } from "../../configs/config";
import { Box, Pagination, CircularProgress } from "@mui/material";

// List of project component
const Projects = () => {
  const [page, setPage] = React.useState(1);
  const projectsState = useProjectStore((state) => ({
    projects: state.projects,
    getProjects: state.getProjects,
    pagesCount: state.pagesCount,
  }));

  React.useEffect(() => {
    projectsState.getProjects(page, config.projectsPage.defaultLimitOfProjects);
  }, [page]);

  if (projectsState.projects.length === 0) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {projectsState.projects.map((project, i) => (
          <ProjectCard
            key={i}
            imgUrl={config.projectsPage.defaultCardImg}
            title={project.name}
            creationDate={project.created_on}
          />
        ))}
      </Box>
      <Pagination
        count={projectsState.pagesCount}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        onChange={(_e, page) => setPage(page)}
      />
    </div>
  );
};

export default Projects;
