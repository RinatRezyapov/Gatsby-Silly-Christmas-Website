import React from "react";
import styled from 'styled-components';
import Layout from '../components/layout';

export default function GatsbySillyWebsite() {
  return <Layout>
    <Column>
      <h1>
        Need a break? Learn something new by building a site or app with Gatsby. Have fun, keep it silly, and enjoy the process!
        </h1>
    </Column>
    <Column />
    <Column />
    <Column>
      <p>
        A site that makes goofy sound effects as you scroll? A virtual lava lamp? Yes, please! The sillier the site, the better. Get creative, build new skills, and get exclusive swag for participating in the first-ever Silly Site Challenge. The top 20 silliest sites will be highlighted on the Gatsby Blog. Sign up to get all the details including how to get started building that silly site!
        </p>
      <p> Check out Gatsby's <GatsbyColorLink href='https://www.gatsbyjs.com/silly-site-challenge/' target='_blank' rel="noreferrer">Silly Website Challenge</GatsbyColorLink></p>
    </Column>
  </Layout>
}

const GatsbyColorLink = styled.a`
  color: #663399;
  text-decoration: none;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Column = styled.div`
  flex: 1 0 0%;
  padding: 0 3rem;
`;