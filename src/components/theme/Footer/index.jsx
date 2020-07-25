import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Maximiliano Yacobucci</h2>
        <span>© All rights are reserved | {new Date().getFullYear()}</span>
      </Details>
    </Flex>
  </Wrapper>
);
