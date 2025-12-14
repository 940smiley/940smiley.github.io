class GitHubPortfolio {
    constructor() {
        this.username = '940smiley';
        this.featuredRepos = ['recoveredtreasures', 'giveawonderfulday', 'trashy-items'];
        this.languageColors = {
            Python: '#3776ab',
            JavaScript: '#f7df1e',
            TypeScript: '#3178c6',
            HTML: '#e34f26',
            CSS: '#1572b6',
            Java: '#ed8b00',
            'C++': '#00599c',
            C: '#555555',
            Go: '#00add8',
            Rust: '#000000',
            PHP: '#777bb4',
            Ruby: '#cc342d',
            Swift: '#fa7343',
            Kotlin: '#7f52ff',
            Dart: '#0175c2',
            Shell: '#89e051'
        };
        this.init();
    }

    async init() {
        try {
            const repos = await this.fetchRepositories();
            this.renderRepositories(repos);
        } catch (error) {
            console.error('Error loading repositories:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }

    async fetchRepositories() {
        const response = await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=100`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    renderRepositories(repos) {
        const ownRepos = repos.filter(repo => !repo.fork);
        const sortedRepos = ownRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        const featuredRepos = [];
        const otherRepos = [];

        sortedRepos.forEach(repo => {
            if (this.featuredRepos.includes(repo.name.toLowerCase())) {
                featuredRepos.push(repo);
            } else {
                otherRepos.push(repo);
            }
        });

        this.displaySection('featuredProjects', featuredRepos, true);
        this.displaySection('recentProjects', otherRepos.slice(0, 6));
        this.displaySection('allProjects', otherRepos);
    }

    displaySection(targetId, repos, isFeatured = false) {
        const container = document.getElementById(targetId);
        if (!repos.length) {
            container.innerHTML = '<p class="no-repos">Repositories will appear here once they are available.</p>';
            return;
        }
        container.innerHTML = repos.map(repo => this.createProjectCard(repo, isFeatured)).join('');
    }

    createProjectCard(repo, isFeatured = false) {
        const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        const description = repo.description || 'No description provided yet — stay tuned for updates!';
        const language = repo.language || 'Unknown';
        const languageColor = this.languageColors[language] || '#586069';
        const sizeLabel = repo.size > 0 ? this.formatSize(repo.size) : 'Fresh repo';

        return `
            <article class="project-card ${isFeatured ? 'featured' : ''}">
                ${isFeatured ? '<span class="featured-badge">Featured</span>' : ''}
                <div class="project-header">
                    <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="project-title">
                        <i class="fas fa-folder-open"></i>
                        ${repo.name}
                    </a>
                    <span class="project-visibility">${repo.private ? 'Private' : 'Public'}</span>
                </div>

                <p class="project-description">${description}</p>

                <div class="project-stats">
                    <span class="stat" title="Stargazers"><i class="fas fa-star"></i>${repo.stargazers_count}</span>
                    <span class="stat" title="Forks"><i class="fas fa-code-branch"></i>${repo.forks_count}</span>
                    <span class="stat" title="Repository size"><i class="fas fa-database"></i>${sizeLabel}</span>
                </div>

                <div class="language-info">
                    <div class="language">
                        <span class="language-dot" style="background-color: ${languageColor}"></span>
                        ${language}
                    </div>
                    <span class="updated-date">Updated ${updatedDate}</span>
                </div>
            </article>
        `;
    }

    formatSize(sizeInKB) {
        if (sizeInKB < 1024) return `${sizeInKB} KB`;
        if (sizeInKB < 1024 * 1024) return `${(sizeInKB / 1024).toFixed(1)} MB`;
        return `${(sizeInKB / (1024 * 1024)).toFixed(1)} GB`;
    }

    showError() {
        ['featuredProjects', 'recentProjects', 'allProjects'].forEach(id => {
            const container = document.getElementById(id);
            container.innerHTML = `
                <div class="no-repos">
                    <i class="fas fa-triangle-exclamation"></i>
                    <p>Unable to load repositories from GitHub right now. Please retry later.</p>
                </div>
            `;
        });
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GitHubPortfolio();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
