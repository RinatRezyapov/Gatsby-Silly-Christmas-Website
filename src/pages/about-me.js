import React from "react";
import styled from 'styled-components';
import Layout from '../components/layout';

export default function AboutMe() {
  return <Layout>
    <Column>
      <h1>
        Hi!
      </h1>
      <p>
        My name is Rinat and I'm a front-end developer.
      </p>
      <p>Most of the time I learn and try new things in web development but sometimes I write articles in my
        <GatsbyColorLink href='https://rrezyapov.com/' target='_blank' rel="noreferrer">&nbsp;blog</GatsbyColorLink>
      </p>
    </Column>
    <Column />
  </Layout>
}

const GatsbyColorLink = styled.a`
  color: #FFEB3B;
  text-decoration: none;
`;

const Column = styled.div`
  flex: 1 0 0%;
  padding: 0 3rem;
  max-width: 600px;
`;