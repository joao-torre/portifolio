/**
 * github.js
 * Carrega apenas os repositórios selecionados para a seção de Projetos.
 */

const GITHUB_USERNAME = 'joao-torre';

const FEATURED_REPOS = [
  'Financial-Anomaly-Detection',
  'Credit-Recovery-Curve',
  'Performance-Analytics',
];

async function fetchGithubRepos() {
  try {
    const requests = FEATURED_REPOS.map((repoName) =>
      fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`GitHub API respondeu ${response.status} para ${repoName}`);
          }
          return response.json();
        })
    );

    const repos = await Promise.all(requests);

    return repos.map((repo) => ({
      name: repo.name,
      description: repo.description || 'Sem descrição.',
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
    }));
  } catch (error) {
    console.error('[github.js] Falha ao buscar projetos selecionados:', error);
    return null;
  }
}
