import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Layout from '../components/layout';

export default function Home() {
  const [tdsCount, setTdsCount] = useState(0);
  useEffect(() => {
    const td = document.getElementsByTagName('td');
    setTdsCount(td.length);
  }, [])
  return <Layout>
    <Column>
      <h1>This silly web site was built with <GatsbyColorText>{' '}Gatsby</GatsbyColorText> and HTML Tables</h1>
      <p>What? HTML Tables?</p>
      <p>Long long time ago developers were using HTML Tables to create images in order to display them in email clients that do not support displaying images.
      This web site doesn't use images at all, all you see are HTML Tables with cells of different colors.</p>
    </Column>
    <Column />
    <Column />
    <Column>
      <h1>Right now the DOM contains <GatsbyColorText>{' '}{tdsCount}</GatsbyColorText> td elements</h1>
      <p>There could be even more. It all depends on how detalaised you want your images when converting them to the HTML Table.</p>
      <p>Of course performance will suffer and optimization tools, such as Lighthouse, won't give your website green light.</p>
    </Column>
  </Layout>
}

const GatsbyColorText = styled.span`
  color: #663399;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Column = styled.div`
  flex: 1 0 0%;
  padding: 0 3rem;
`;