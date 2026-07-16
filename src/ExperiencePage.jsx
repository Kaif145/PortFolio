import "./App.css";
import PortfolioShell from "./PortfolioShell";

const experience = [
  {
    title: "AI Customer Support Chatbot",
    company: "Elements HR Services, Gurgaon",
    period: "Industry Project • In Progress",
    points: [
      "Developing an AI-powered customer support chatbot for real-world use.",
      "Building backend APIs, chatbot workflows, and live-agent handover logic.",
      "Collaborating in a 4-member team using Node.js, Dialogflow, and cloud tools.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Independent Client Work",
    period: "Available for new projects",
    points: [
      "Create responsive websites and full-stack MERN applications.",
      "Convert UI designs into polished, production-ready web experiences.",
      "Integrate authentication, REST APIs, and deployment workflows.",
    ],
  },
];

function ExperiencePage() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="section-card">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="timeline-meta">
                  {item.company} • {item.period}
                </p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}

export default ExperiencePage;
