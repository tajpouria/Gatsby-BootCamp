import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  );
  return (
    <p className={footerStyles.footerContent}>
      All rights reserved for
      {' '}
      {data.site.siteMetadata.author}
      {' '}
2019 ©
      {' '}
    </p>
  );
}
