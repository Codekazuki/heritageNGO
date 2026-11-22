import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, Leaf } from "lucide-react";
import React from "react";

const links = [
  ["About", "/about"],
  ["Our work", "/our-work"],
  ["Projects", "/projects"],
  ["Get involved", "/get-involved"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='site-header'>
      <div className='container nav-wrap'>
        <Link to='/' className='brand' onClick={() => setOpen(false)}>
          <span className='brand-mark'>
            <Leaf size={21} strokeWidth={1.5} />
          </span>
          <span className='brand-words'>
            <strong>HERITAGE</strong>
            <small>CULTURAL & NATURAL FOUNDATION</small>
          </span>
        </Link>
        <button
          className='menu-toggle'
          aria-label='Toggle navigation'
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "main-nav open" : "main-nav"}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link
            className='nav-cta'
            to='/get-involved'
            onClick={() => setOpen(false)}
          >
            Support our work <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer-top'>
        <div className='footer-brand'>
          <div className='brand brand-light'>
            <span className='brand-mark'>
              <Leaf size={21} />
            </span>
            <span className='brand-words'>
              <strong>HERITAGE</strong>
              <small>CULTURAL & NATURAL FOUNDATION</small>
            </span>
          </div>
          <p>
            Preserving what matters. Protecting what sustains us. Building a
            future we can all be proud of.
          </p>
        </div>
        <div>
          <span className='footer-label'>EXPLORE</span>
          <Link to='/about'>About us</Link>
          <Link to='/our-work'>Our work</Link>
          <Link to='/projects'>Projects</Link>
        </div>
        <div>
          <span className='footer-label'>TAKE PART</span>
          <Link to='/get-involved'>Volunteer</Link>
          <Link to='/get-involved'>Partner with us</Link>
          <Link to='/get-involved'>Contact</Link>
        </div>
        <div>
          <span className='footer-label'>GET IN TOUCH</span>
          <a href='mailto:hello@heritagefoundation.org'>
            hello@heritagefoundation.org
          </a>
          <span className='footer-note'>
            Connect with us and be part of the story.
          </span>
        </div>
      </div>
      <div className='container footer-bottom'>
        <span>
          © {new Date().getFullYear()} Heritage Cultural & Natural Foundation.
        </span>
        <span>Rooted in heritage. Growing a better future.</span>
      </div>
    </footer>
  );
}
