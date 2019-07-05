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
        component: blogPostTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};
