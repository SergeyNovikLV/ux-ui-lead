import "./Nav.css";

export default function Nav({ scrolled, hoveredNav, setHoveredNav }) {
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="/" className="nav__brand" aria-label="Home">
        <svg className="nav__logo" width="36" height="32" viewBox="0 0 58 51" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M31.0119 3C14.9508 3 3.00427 19.9245 19.4034 19.9245C36.2437 19.9245 42.3423 21.9705 36.2001 30.9889C30.0578 40.0073 2.60672 54.7665 3.00427 44.5165C3.32232 36.3165 27.4737 25.3077 54.8056 19.9245" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </a>
      <div className="nav__links">
        {["Work", "About", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`nav__link ${hoveredNav === link ? "nav__link--active" : ""}`}
            onMouseEnter={() => setHoveredNav(link)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
