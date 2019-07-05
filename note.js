// gatsby -h installing gatsby-cli

// > yarn add globally gatsby-cli

// starting gatsby project on default setup || other setups

// > gatsby new gatsby-bootCamp < https://github.com/rep >

// /src/page && Link

import { Link } from 'gatsby';

export default function page() {
  return (
    <div>
      <Link to="/contact">Click here.</Link>
      <a href="/ext">To external uri</a>
    </div>
  );
}

// reuseAble Component layout

// installing gatsby-plugins
// > yarn add gatsby-plugin-sass node-sass
// ./gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-sass'],
};

// modular css styling

// adding siteMetaData
// http://localhost:8000/___graphql

// ./gatsby-config.js
// siteMetaData : {
// title: 'A title',
// author: 'Andrew Mead'
// }

// set graphql playground
// ./.env.development => GATSBY_GRAPHQL_IDE=playground
// ./package.json "development": "env-cmd -f .env.development gatsby develop"

// source from filesystem

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-system',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};

// gatsby-transformer-remark && post.md

// ./gatsby-node.js
// onCreateNode
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

// createPage
module.exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/BlogPost.jsx');

  return graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 },
  ).then((res) => {
    if (res.errors) throw res.errors;

    res.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: `blog/${edge.node.fields.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};

// ./src/templates/BlogPost.jsx
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

// rendering image content
// > yarn gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-image
module.exports = {
  resolve: 'gatsby-transformer-remark',
  options: {
    plugins: [
      'gatsby-remark-relative-images',
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 750,
          linkImageToOriginal: false,
        },
      },
    ],
  },
};
