import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { projectsData } from "./projectData";

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "Chandigarh University, Mohali",
    year: "2023 – 2026 (Pursuing)",
  },
  {
    title: "Higher Secondary (12th Grade) – Arts",
    place: "Islampur High School (HS), West Bengal",
    year: "Passed in 2023",
  },
  {
    title: "Diploma in Document Object Model (DOM)",
    place: "1-Year Course (Ongoing)",
    year: "",
  },
];

const socialLinks = [
  { href: "#", icon: "fa-brands fa-instagram" },
  { href: "#", icon: "fa-brands fa-github" },
  { href: "#", icon: "fa-brands fa-linkedin" },
  { href: "#", icon: "fa-brands fa-telegram" },
  { href: "#", icon: "fa-brands fa-whatsapp" },
];

function App() {
  const [theme, setTheme] = useState({ bg: "#e0f7fa", text: "#000000" });

  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);

  const toggleTheme = () => {
    const colors = [
      { bg: "#f5f5f5", text: "#000000" },
      { bg: "#ffffff", text: "#000000" },
      { bg: "#f0f8ff", text: "#000000" },
      { bg: "#e0f7fa", text: "#000000" },
      { bg: "#1e1e1e", text: "#ffffff" },
      { bg: "#0f172a", text: "#ffffff" },
      { bg: "#121212", text: "#ffffff" },
      { bg: "#2d2d2d", text: "#ffffff" },
    ];

    const nextTheme = colors[Math.floor(Math.random() * colors.length)];
    setTheme(nextTheme);
  };

  return (
    <div className="portfolio-page">
      <header className="hedder">
        <div className="name">
          <a href="/">Kaifur Rhaman</a>
        </div>

        <nav className="topics" aria-label="Primary navigation">
          <div className="bio">
            <a href="#about">Bio</a>
          </div>
          <div className="paper">
            <a href="#about">Papers</a>
          </div>
          <div className="talks">
            <a href="#about">Talks</a>
          </div>
          <div className="news">
            <a href="#about">News</a>
          </div>
          <div className="experience">
            <a href="#about">Experience</a>
          </div>
          <div className="project">
            <Link to="/projects">Projects</Link>
          </div>
        </nav>

        <div className="mood">
          <i id="mood" className="fa-solid fa-moon" onClick={toggleTheme} />
        </div>
      </header>

      <main className="container">
        <section className="left">
          <div className="myPhoto">
            <img src="/profile.jpg" alt="Kaifur Image" />
          </div>

          <p className="namek">Kaifur Rhaman</p>
          <p>Aspiring Software Engineer</p>

          <div className="contact">
            {socialLinks.map((link) => (
              <a key={link.icon} href={link.href}>
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </section>

        <section className="right" id="about">
          <div className="about">
            <h2>About Me</h2>
            <p>
              I'm an aspiring Software Engineer currently pursuing my Bachelor
              of Computer Applications (BCA) from Chandigarh University. I’m
              passionate about web development, problem-solving, and learning
              new technologies. My interests include working on real-world
              projects using HTML, CSS, JavaScript, and React.
            </p>
            <p>
              I've built several projects like a to-do list app, weather app,
              quiz website, and functional clones of Myntra and Amazon. I'm also
              learning data structures and algorithms through platforms like
              LeetCode and YouTube.
            </p>
            <p>
              Apart from coding, I enjoy creating educational content on my
              YouTube channel, MaxiCoding, where I simplify complex tech topics
              for students. I'm focused on becoming a full-stack developer and
              building impactful digital solutions.
            </p>

            <div className="myCv">
              <h2>My Resumes</h2>
              <p>
                Download my resumes to learn more about my professional journey,
                skills, and experiences. I look forward to connecting with you!
              </p>
              <a href="/Kaifur-Rahaman-Resume.pdf" download>
                <i className="fa-solid fa-file" /> Resumes
              </a>
            </div>
          </div>

          <div className="infoaboutme">
            <div className="myintrest">
              <h2>My Interests</h2>
              <ul>
                <li>Software Engineering</li>
                <li>Web Development</li>
                <li>Data Analysis</li>
              </ul>
            </div>

            <div className="myEducation">
              <h2>Education</h2>
              {education.map((item) => (
                <div className="edu-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  {item.year ? <p>{item.year}</p> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="myProjects" id="projects">
            <h2>Featured Projects</h2>
            <div className="project-grid">
              {projectsData.slice(0, 3).map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links-inline">
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      Live
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/projects" className="view-more-link">
              View all projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
