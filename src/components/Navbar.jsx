import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll for iOS Safari when drawer is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  return (
    <header className={`nav nav-purple ${open ? "is-open" : ""}`}>
      <div className="container nav-wrap">
        {/* Brand */}
        <div className="brand">
          <Link to="/" className="brand-logo-wrap" aria-label="INFINITY TV — Home">
            <img
              className="brand-logo"
              src="/logo.png"
              srcSet="/LLOGO.png 1x, /logo@2x.png 2x"
              alt="INFINITY TV"
            />
          </Link>
        </div>

        {/* Desktop menu stays identical */}
        <nav className="menu" role="navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
            Home
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Packages
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : undefined)}>
            FAQ
          </NavLink>
          <Link to="/contact" className="btn ghost">Contact</Link>
          <NavLink to="/packages" className="btn">Order</NavLink>
          <a
            className="social-ig"
            href="https://instagram.com/infinity_tv__"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile toggle button (only visible on phones via CSS) */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Backdrop & Drawer (mobile only styles) */}
      <button className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden={!open} />
      <nav id="mobile-drawer" className="nav-drawer" onClick={() => setOpen(false)}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <Link to="/contact" className="btn ghost">Contact</Link>
        <NavLink to="/packages" className="btn">Order</NavLink>
        <a className="social-ig" href="https://instagram.com/infinity_tv__" target="_blank" rel="noreferrer">Instagram</a>
        <div className="drawer-safe" />
      </nav>
    </header>
  );
}
