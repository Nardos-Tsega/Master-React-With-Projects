import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails({ username }) {
  const [repoDetail, setRepoDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    async function fetchdata() {
      const detail = await fetch(
        `https://api.github.com/repos/${username}/${name}`
      );

      const result = await detail.json();

      if (result) {
        setRepoDetail(result);
        setLoading(false);
      }
    }
    if (username && name) {
      fetchdata();
    }
  }, [username, name]);
  return (
    <div className="Project-container">
      <h2>Project : {repoDetail.name}</h2>
      {loading ? <div>Loading...</div> : <div></div>}
    </div>
  );
}

export default ProjectDetails;
