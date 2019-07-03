import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <>
      <h1>Andrew Mead</h1>
      <nav className="nav justify-content-center">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="content" />
      </nav>
    </>
  );
}
