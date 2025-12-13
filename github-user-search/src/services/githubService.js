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

/**
 * Advanced search for GitHub users with filters
 * @param {Object} searchParams - Search parameters
 * @param {string} searchParams.username - GitHub username to search for
 * @param {string} searchParams.location - Location filter
 * @param {number} searchParams.minRepos - Minimum number of repositories
 * @param {number} searchParams.page - Page number for pagination
 * @returns {Promise} - Promise resolving to search results
 */
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {
    // Build query string
    let query = '';
    
    if (username) {
      query += `${username} in:login`;
    }
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos) {
      query += ` repos:>=${minRepos}`;
    }

    // If no query parameters provided, search for all users (not recommended, but fallback)
    if (!query) {
      query = 'type:user';
    }

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        per_page: 10,
        page: page
      },
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