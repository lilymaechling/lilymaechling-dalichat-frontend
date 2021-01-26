export function getBearerTokenHeader() {
  return { Authorization: `Bearer ${localStorage.getItem(authTokenName)}` };
}

export function setBearerToken(token) {
  localStorage.setItem(authTokenName, token);
}
