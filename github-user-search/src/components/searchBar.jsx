import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  // State for input value
  const [username, setUsername] = useState('');
  
  // State for user data from API
  const [userData, setUserData] = useState(null);
  
  // State for loading status
  const [loading, setLoading] = useState(false);
  
  // State for error handling
  const [error, setError] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't search if input is empty
    if (!username.trim()) {
      return;
    }

    // Reset states
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      // Fetch user data from GitHub API
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="search-container">
      <h1>GitHub User Search</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-message">
          <p>Looks like we cant find the user</p>
        </div>
      )}

      {/* Display User Data */}
      {userData && !loading && !error && (
        <div className="user-card">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`}
            className="user-avatar"
          />
          <h2>{userData.name || userData.login}</h2>
          <p className="user-bio">{userData.bio}</p>
          <div className="user-stats">
            <span>Followers: {userData.followers}</span>
            <span>Following: {userData.following}</span>
            <span>Public Repos: {userData.public_repos}</span>
          </div>
          <a 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-link"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;