import "./App.css";
import PortfolioShell from "./PortfolioShell";

const contactLinks = [
  {
    href: "mailto:kaifur.rahaman.145@gmail.com",
    label: "Email",
    value: "kaifur.rahaman.145@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    href: "https://github.com/Kaif145",
    label: "GitHub",
    value: "github.com/Kaif145",
    icon: "fa-brands fa-github",
  },
  {
    href: "https://www.linkedin.com/in/kaifurrahaman",
    label: "LinkedIn",
    value: "linkedin.com/in/kaifurrahaman",
    icon: "fa-brands fa-linkedin",
  },
  {
    href: "tel:+919002519463",
    label: "Phone",
    value: "+91 9002519463",
    icon: "fa-solid fa-phone",
  },
];

function ContactPage() {
  return (
    <PortfolioShell>
      <main className="main-content">
        <section className="section-card">
          <h2>Contact</h2>
          <p>
            I’m always open to discussing new opportunities, freelance projects,
            or collaborations.
          </p>
          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-card"
                target="_blank"
                rel="noreferrer"
              >
                <i className={link.icon} />
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </PortfolioShell>
  );
}

export default ContactPage;
