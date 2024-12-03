import { useState } from "react";
import { Link } from "react-router-dom";


const GithubUser = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = () => {
    if (!username) {
      setError("Please enter a GitHub username.");
      return;
    }
    setError("");
    setLoading(true);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        const { login, avatar_url,  html_url } = data;
        setUser({ login, avatar_url, html_url });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setUser(null);
      });
  };

  return (
    <div className="user-profile-container">
      <h1 className="title">GitHub User Finder</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button onClick={fetchUser} className="search-button">
          Search
        </button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <h2>{user.login}</h2>
      
          <p>
            <strong>GitHub Profile:</strong>{" "}
            <Link to={user.html_url} target="_blank">
              {user.html_url}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
