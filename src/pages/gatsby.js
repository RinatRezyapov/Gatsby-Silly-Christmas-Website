import React from "react";
import styled from 'styled-components';
import Layout from '../components/layout';

export default function Gatsby() {
  return <Layout>
    <Column>
      <h1>
        One Front-end to Rule Them All
        </h1>
      <p>
        Gatsby is a React-based open-source framework for creating websites and apps. It's great whether you're building a portfolio site or blog, or a high-traffic e-commerce store or company homepage.
        </p>
      <p> Check out Gatsby's official <GatsbyColorLink href='https://www.gatsbyjs.com/' target='_blank' rel="noreferrer">&nbsp;web site</GatsbyColorLink></p>
    </Column>
    <Column />
    <Column />
    <Column>
      <h1>
        Gatsby sites are fast by design
        </h1>
      <p>
        Gatsby loads only critical 1 parts of the page, so your site loads as fast as possible. Once loaded, Gatsby prefetches 2 resources for other pages so that clicking on the site feels incredibly fast. Gatsby lets teams focus on creating content-driven websites instead of worrying about performance.
        </p>
    </Column>
  </Layout>
}

const GatsbyColorLink = styled.a`
  color: #FFEB3B;
  text-decoration: none;
`;

const Column = styled.div`
  flex: 1 0 0%;
  padding: 0 3rem;
`;