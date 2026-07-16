import "./App.css";
import PortfolioShell from "./PortfolioShell";

function ResumePage() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="section-card resume-card">
          <h2>Resume</h2>
          <p>
            Download my resume to review my background, projects, tools, and
            professional experience in one place.
          </p>
          <a
            href="/Kaifur-Rahaman-Resume.pdf"
            download
            className="download-btn"
          >
            <i className="fa-solid fa-file-arrow-down" /> Download Resume
          </a>

          <div className="education-list" style={{ marginTop: "18px" }}>
            <div>
              <h3>Highlights</h3>
              <p>
                Full-stack MERN development • AI integrations • Authentication
                systems • Real-world projects
              </p>
            </div>
            <div>
              <h3>Achievements</h3>
              <p>
                Built multiple full-stack applications, developed AI-powered web
                apps, and solved 250+ DSA problems.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}

export default ResumePage;
