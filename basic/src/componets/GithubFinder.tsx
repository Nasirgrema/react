import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GithubFinder = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) {
      setUser(null);
      setError("");
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const { login, avatar_url, html_url } = response.data;

        setUser({ login, avatar_url, html_url });
        setLoading(false);
      } catch (err) {
        setError(err.response?.status === 404 ? "User not found" : "An error occurred");
        setUser(null);
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

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

export default GithubFinder;
