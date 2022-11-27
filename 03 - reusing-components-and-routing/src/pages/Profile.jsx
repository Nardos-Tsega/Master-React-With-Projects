import { React, useState, useEffect } from "react";
import Link from "../components/Link";
import List from "../components/List";
import "./Profile.css";

function Profile({ username }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  const items = [
    {
      field: "html_url",
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: "repos_url",
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    {
      field: "location",
      value: <Link url={profile.location} title={profile.html_url} />,
    },
    {
      field: "email",
      value: <Link url={profile.email} title={profile.html_url} />,
    },
    {
      field: "bio",
      value: <Link url={profile.bio} title={profile.html_url} />,
    },
  ];

  useEffect(() => {
    async function fetchdata() {
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const result = await profile.json();

      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }

    fetchdata();
  }, [username]);
  return (
    <div className="Profile-container">
      <h2>About me</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img
            className="Profile-avatar"
            src={profile.avatar_url}
            alt={profile.name}
          />

          <List items={items} />
        </div>
      )}
    </div>
  );
}
export default Profile;
