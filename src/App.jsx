import { Link } from "react-router-dom";
import "./App.css";
import { projectsData } from "./projectData";
import PortfolioShell from "./PortfolioShell";

const sectionCards = [
  {
    title: "About Me",
    description:
      "Learn more about my background, education, and focus as a full-stack developer.",
    to: "/about",
  },
  {
    title: "Skills",
    description:
      "Explore my stack, including SQL, Python, Next.js, OOP, and modern web technologies.",
    to: "/skills",
  },
  {
    title: "Experience",
    description:
      "See my AI chatbot work, freelance development experience, and project background.",
    to: "/experience",
  },
  {
    title: "Contact",
    description:
      "Reach out for collaborations, freelance work, or opportunities to build together.",
    to: "/contact",
  },
];

function App() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack MERN Developer • BCA Student</p>
            <h1>
              Building modern web apps with React, Node.js, AI, and clean
              architecture.
            </h1>
            <p className="hero-text">
              I’m Kaifur Rahaman, a developer focused on creating full-stack web
              applications, AI-powered experiences, and practical digital
              products that solve real-world problems.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                Explore Projects
              </Link>
              <a
                href="/Kaifur-Rahaman-Resume.pdf"
                download
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a href="mailto:kaifur.rahaman.145@gmail.com">
                <i className="fa-solid fa-envelope" />
              </a>
              <a
                href="https://github.com/Kaif145"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaifurrahaman"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img src="/profile.jpg" alt="Kaifur Rahaman" />
            <h2>Currently building with</h2>
            <p>
              React.js, Next.js, Node.js, Express.js, MongoDB, SQL, Python, and
              AI integrations.
            </p>
          </div>
        </section>

        <section className="section-card">
          <h2>Explore the Portfolio</h2>
          <div className="project-grid">
            {sectionCards.map((card) => (
              <Link key={card.title} to={card.to} className="project-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <Link to="/projects" className="text-link">
              View all projects
            </Link>
          </div>
          <div className="project-grid">
            {projectsData.slice(0, 4).map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links-inline">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}

export default App;
