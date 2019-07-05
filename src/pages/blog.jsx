import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import uuid from 'uuid/v4';

import Layout from '../components/Layout';

export default function blog() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
            html
          }
        }
      }
    }
  `);
  return (
    <>
      <Layout>
        {allMarkdownRemark.edges.map(({ node }) => (
          <div key={uuid()}>
            <h1>
              <Link to={`blog/${node.fields.slug}`}>{node.frontmatter.title}</Link>
            </h1>
            <p>{node.frontmatter.date}</p>
          </div>
        ))}
      </Layout>
    </>
  );
}
