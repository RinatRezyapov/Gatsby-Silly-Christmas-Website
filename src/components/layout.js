import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Background from './Background';
import Button from './Button';
import Sign from './Sign';
import Tree from './Tree';
import Snow from './Snow';
import SEO from './SEO';

export default function Layout({ children }) {

  const [decorated, setDecorated] = useState(false);
  const [snowStarted, setSnowStarted] = useState(false);

  const onDecorateTrees = () => setDecorated(v => !v);

  const onStartSnow = () => setSnowStarted(v => !v);

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <SEO />
      {snowStarted && <Snow />}
      <Wrapper>
        <div style={{ flex: 1, padding: '0 3rem' }}>
          <Button>
            <StyledButtonLink to='/' aria-label='About this site'>About this site</StyledButtonLink>
          </Button>
        </div>
        <div style={{ flex: 1, padding: '0 3rem' }}>
          <Button>
            <StyledButtonLink to='/gatsby' aria-label='Gatsby'>Gatsby</StyledButtonLink>
          </Button>
        </div>
        <div style={{ flex: 1, padding: '0 3rem' }}>
          <Button>
            <StyledButtonLink to='/gatsby-silly-website' aria-label='Gatsby Silly Site Challenge'>Gatsby Silly Site Challenge</StyledButtonLink>
          </Button>
        </div>
        <div style={{ flex: 1, padding: '0 3rem' }}>
          <Button>
            <StyledButtonLink to='/about-me' aria-label='About Me'>About Me</StyledButtonLink>
          </Button>
        </div>
      </Wrapper>
      <Background />
      <Tree decorated={decorated} cellHeight={8} cellWidth={8} style={{ top: '40%', left: '40%' }} />
      <Tree decorated={decorated} cellHeight={1} cellWidth={1} style={{ top: '55.5%', left: '80%' }} />
      <Tree decorated={decorated} cellHeight={4} cellWidth={4} style={{ top: '40%', left: '-5%' }} />
      <Sign 
        cellHeight={4} 
        cellWidth={3} 
        style={{ transform: 'rotate(-10deg)', top: '60%', left: '20%' }}
        onButtonClick={onDecorateTrees}
      >
        {decorated ? 'Undecorate' : 'Decorate'} trees
      </Sign>
      <Sign 
        cellHeight={3} 
        cellWidth={2} 
        style={{ transform: 'scaleX(-1) rotate(-10deg)', top: '60%', left: '70%' }} 
        buttonStyle={{ height: 80, transform: 'scaleX(-1) rotate(2deg)' }}
        onButtonClick={onStartSnow}
      >
        {snowStarted ? 'Stop' : 'Start'} snow
      </Sign>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </div >
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  z-index: 1;
  margin-top: 2rem;
  width: 100%;
  height: 100px;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 200px;
`;

const StyledButtonLink = styled(Link)`
  color: white; 
  text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
  text-decoration: none; 
  padding: 1rem; 
  display: flex; 
  justify-content: center;
  align-items: center; 
  height: 100%;
  text-align: center;
`;