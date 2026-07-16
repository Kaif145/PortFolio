import './App.css'
import { projectsData } from './projectData'
import PortfolioShell from './PortfolioShell'

function ProjectsPage() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="section-card">
          <div className="section-heading">
            <h2>My Projects</h2>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <article className="project-card full-card" key={project.title}>
                <div className="project-card-top">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-up-right-from-square" /> Live
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github" /> GitHub
                    </a>
                  </div>
                </div>

                <p>{project.description}</p>

                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PortfolioShell>
  )
}

export default ProjectsPage
