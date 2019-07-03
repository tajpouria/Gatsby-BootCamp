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

// reuseAble Component
