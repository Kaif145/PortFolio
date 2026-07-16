import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

function PortfolioShell({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#0f172a" : "#f4fbff";
    document.body.style.color = theme === "dark" ? "#f8fafc" : "#0f172a";
    window.localStorage.setItem("portfolio-theme", theme);

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`portfolio-page ${theme}`}>
      <header className="site-header">
        <Link to="/" className="brand">
          Kaifur Rahaman
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      {children}
    </div>
  );
}

export default PortfolioShell;
