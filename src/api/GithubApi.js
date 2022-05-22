const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://api.github.com';

const getUserByLogin = async (login) => await fetch(`${baseUrl}/users/${login}`);
const getReposByLogin = async (login, currentPage) =>
  await fetch(`${baseUrl}/users/${login}/repos?per_page=100&page=${currentPage}`);

export const GitHubApi = {
  getUserByLogin,
  getReposByLogin,
};
