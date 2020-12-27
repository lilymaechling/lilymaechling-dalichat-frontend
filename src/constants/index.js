// Server URL for making backend requests
// TODO: This will not work in production
export const BACKEND_URL = 'http://localhost:9090';

// Auth token name for storage and transmission to backend
export const authTokenName = 'authToken';

// Number of ms before an axios request times out
export const requestTimeout = 5000;

/**
 * Middleware function to generate standard user-facing error message
 * * Note: to maintain truthiness state of message, if message is considered falsy this function will return an empty string
 * @param {*} message - Message string to render
 */
export function generateFrontendErrorMessage(message) {
  return message ? `Error: "${message}"` : '';
}

// Base of site meta title
export const baseSiteTitle = 'DALIChat, Dartmouth\'s Social Media App';

/**
 * A helper function for generating standard site meta titles
 * @param {*} pageName - site title to append to standard meta title
 */
export function generateMetaTitleFromPage(pageName) {
  return `${pageName} — ${baseSiteTitle}`;
}
