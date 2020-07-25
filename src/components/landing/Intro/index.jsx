import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import Img from 'gatsby-image';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import maxiPhoto from '../../../assets/images/maxi.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Maximiliano Yacobucci and I’m a Software Engineer!</h4>
        </Details>
        <Thumbnail>
          {/* <img src={maxiPhoto} alt="I’m Maximiliano Yacobucci and I’m a Software Engineer!" /> */}
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
