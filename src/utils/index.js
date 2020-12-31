// Server URL for making backend requests
export const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:9090';

// Auth token name for storage and transmission to backend
export const authTokenName = 'authToken';

// Number of ms before an axios request times out
export const requestTimeout = 5000;

// Base of site meta title
export const baseSiteTitle = 'DALIChat, Dartmouth\'s Social Media App';

/**
 * A helper function for generating standard site meta titles
 * @param {*} pageName - site title to append to standard meta title
 */
export function generateMetaTitleFromPage(pageName) {
  return `${pageName} — ${baseSiteTitle}`;
}
