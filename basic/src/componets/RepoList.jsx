import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/orgs/geekinks/repos")
      .then((response) => response.json())
      .then((data) => {
        // Map to extract only necessary fields
        const formattedData = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          forks_count: repo.forks_count,
        }));
        setRepos(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="repo-container">
      <h1 className="repo-title">Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo-item">
            <h2 className="repo-name">
              <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </Link>
            </h2>
            <p className="repo-detail">
              <strong>Full Name:</strong> {repo.full_name}
            </p>
            <p className="repo-detail">
              <strong>Forks:</strong> {repo.forks_count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
