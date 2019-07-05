import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function about() {
  return (
    <div>
      <Layout to="/contact">
        <h3>This is a link to contact page</h3>
        {' '}
        <Link to="/contact">Contact</Link>
      </Layout>
    </div>
  );
}
