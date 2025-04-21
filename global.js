export async function fetchJSON(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Fetch failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error loading JSON:', error);
      return [];
    }
  }
  
  export function renderProjects(projects, container, headingLevel = 'h2') {
    container.innerHTML = '';
    projects.forEach(project => {
      const article = document.createElement('article');
      article.innerHTML = `
        <${headingLevel}>${project.title}</${headingLevel}>
        <img src="${project.image}" alt="${project.title}" />
        <p>${project.description}</p>
      `;
      container.appendChild(article);
    });
  }
  
  export async function fetchGitHubData(username) {
    return await fetchJSON(`https://api.github.com/users/${username}`);
  }
  