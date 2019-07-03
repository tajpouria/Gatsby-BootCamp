import React from 'react';

import Header from './Header';
import Footer from './Footer';
import '../styles/index.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
