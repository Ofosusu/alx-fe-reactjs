import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

/**
 * Fetches user data from GitHub API
 * @param {string} username - GitHub username to search for
 * @returns {Promise}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: API_KEY
        ? { Authorization: `token ${API_KEY}` }
        : {}
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Advanced search for GitHub users with filters
 * @param {Object} searchParams
 * @returns {Promise}
 */
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    if (!query) query = 'type:user';

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        per_page: 10,
        page
      },
      headers: API_KEY
        ? { Authorization: `token ${API_KEY}` }
        : {}
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
