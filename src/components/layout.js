import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Background from './Background';
import SnowBackground from './SnowBackground';
import Button from './Button';
import Snow from './Snow';
import SEO from './SEO';


export default function Layout({ children }) {  
  
  const [songStarted, setSongStarted] = useState(false);

  const onSongToggle = () => setSongStarted(v => {
    const audio = document.getElementById("bgAudio");
    audio.volume = 0.1;
    if (!v) {
      audio.play();
    } else {
      audio.pause();
    }
    return !v;
  });

  return (
    <Wrapper>
      <SEO />
      <Snow />
      <BackgroundWrapper>
        <Background />
        <SnowBackground songStarted={songStarted} onSongToggle={onSongToggle} />
      </BackgroundWrapper>
      <SubWrapper>
        <Navigation>
          <ButtonWrapper>
            <Button>
              <StyledButtonLink to='/' aria-label='About this site'>About this site</StyledButtonLink>
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <StyledButtonLink to='/gatsby' aria-label='Gatsby'>Gatsby</StyledButtonLink>
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <StyledButtonLink to='/gatsby-silly-website' aria-label='Gatsby Silly Site Challenge'>Gatsby Silly Site Challenge</StyledButtonLink>
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button>
              <StyledButtonLink to='/about-me' aria-label='About Me'>About Me</StyledButtonLink>
            </Button>
          </ButtonWrapper>
        </Navigation>
        <ChildrenWrapper>
          {children}
        </ChildrenWrapper>
      </SubWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative; 
  height: 100%;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  padding: 0 3rem;
  min-height: 150px;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 1;
  width: 100%;
  height: 150px;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  max-height: 300px;
  word-break: break-all;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
  }
`;

const StyledButtonLink = styled(Link)`
  color: white; 
  text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
  text-decoration: none; 
  padding: 1rem;
  margin-left: 1rem;
  display: flex; 
  justify-content: center;
  align-items: center; 
  height: 100%;
  text-align: center;
`;