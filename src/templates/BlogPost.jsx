import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export default function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
