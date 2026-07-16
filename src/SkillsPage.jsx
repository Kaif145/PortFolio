import "./App.css";
import PortfolioShell from "./PortfolioShell";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "bcrypt",
      "OOP",
    ],
  },
  {
    title: "Database & AI",
    items: [
      "MongoDB",
      "SQL",
      "Groq API",
      "Google Gemini API",
      "OpenAI API",
      "RAG Pipeline",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Render", "Multer", "Vectra"],
  },
  {
    title: "Core Concepts",
    items: [
      "Authentication",
      "Database Design",
      "CRUD Operations",
      "API Integration",
      "Prompt Engineering",
      "Debugging",
    ],
  },
];

function SkillsPage() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="section-card">
          <h2>Skills</h2>
          <p>
            These are the technologies and concepts I use to build modern,
            scalable, and user-friendly products.
          </p>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}

export default SkillsPage;
