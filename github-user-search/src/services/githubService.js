import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetches user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise} - Promise resolving to user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        // Add authorization header if you have a token (optional)
        // Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};