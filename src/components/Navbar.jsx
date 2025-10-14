import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav nav-purple">
      <div className="container nav-wrap">
        {/* Brand */}
        <div className="brand">
          <Link to="/" className="brand-logo-wrap" aria-label="INFINITY TV — Home">
            <img
              className="brand-logo"
              src="/logo.png"
              srcSet="/LLOGO.png 1x, /logo@2x.png 2x"  /* retina optional */
              alt="INFINITY TV"
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="menu">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
            Home
          </NavLink>

          <NavLink to="/packages" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Packages
          </NavLink>

          {/* FAQ now points to its own page */}
          <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : undefined)}>
            FAQ
          </NavLink>

          <Link to="/contact" className="btn ghost">Contact</Link>

          <NavLink to="/packages" className="btn">
            Order
          </NavLink>

          {/* Instagram */}
          <a
            className="social-ig"
            href="https://instagram.com/infinity_tv__"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
