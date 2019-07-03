import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import headerStyles from './header.module.scss';

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={headerStyles.headerContainer}>
      <h1>{data.site.siteMetadata.title}</h1>
      <div>
        <nav className={headerStyles.navbarContainer}>
          <div className={headerStyles.navbarItems}>
            <Link to="/">Home</Link>
          </div>
          <div className={headerStyles.navbarItems}>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={headerStyles.navbarItems}>
            <Link to="/about">About</Link>
          </div>
          <div className={headerStyles.navbarItems}>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="content" />
        </nav>
      </div>
    </div>
  );
}
