import React from 'react';

import Header from './Header';
import Footer from './Footer';
import layoutStyles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={layoutStyles.layoutContainer}>{children}</div>
      <Footer />
    </>
  );
}
