import { Link } from "react-router-dom";
import "./App.css";
import PortfolioShell from "./PortfolioShell";

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "Chandigarh University • 2023 – 2026",
  },
  {
    title: "Higher Secondary (12th Grade)",
    place: "Islampur High School (HS), West Bengal • 2023",
  },
];

function AboutPage() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="section-card">
          <h2>About Me</h2>
          <p>
            Hi, I’m Kaifur Rahaman — a Full Stack MERN Developer currently
            pursuing a Bachelor of Computer Applications (BCA) at Chandigarh
            University. I specialize in building modern web applications using
            React.js, Node.js, Express.js, and MongoDB.
          </p>
          <p>
            Alongside full-stack development, I enjoy working with AI
            technologies such as RAG pipelines, LLM integrations, and chatbot
            development. I’ve built real-world projects including an AI-powered
            customer support platform, an AI music recommendation system, and
            secure authentication-based applications.
          </p>
          <p>
            My goal is to contribute to impactful products while growing as a
            full-stack developer and AI engineer.
          </p>

          <div className="education-list">
            {education.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card">
          <h2>What I Focus On</h2>
          <p>
            I enjoy creating user-friendly interfaces, reliable APIs, and
            intelligent features that make products faster and smarter for
            users.
          </p>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Web Development</h3>
              <ul>
                <li>React.js and Next.js</li>
                <li>Node.js and Express.js</li>
                <li>Responsive user interfaces</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>AI & Automation</h3>
              <ul>
                <li>RAG pipelines</li>
                <li>LLM integrations</li>
                <li>Chatbots and workflow automation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading">
            <h2>Explore More</h2>
            <Link to="/skills" className="text-link">
              View Skills
            </Link>
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}

export default AboutPage;
