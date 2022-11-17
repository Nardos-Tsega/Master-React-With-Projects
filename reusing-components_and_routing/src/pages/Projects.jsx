import { React, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import List from "../components/List";

function Projects({ username }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function fetchdata() {
      const project = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      const result = await project.json();

      if (result) {
        setProjects(result);
        setLoading(false);
      }
    }
    fetchdata();
  }, [username]);

  return (
    <div className="Project-container">
      <h2>Projects</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              value: (
                <RouterLink url={project.html_url} title={project.html_url} />
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
