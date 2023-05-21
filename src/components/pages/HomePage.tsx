import React from 'react';
import styled from '@emotion/styled/macro';
import Navigation from '../organisms/Navigation';
import Header from '../organisms/Header';
import IconButton from '../atoms/IconButton';
import { AiOutlineBell } from 'react-icons/ai';

const Base = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: aliceblue;
`;

const NavigationWrapper = styled.div`
  background-color: beige;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Body = styled.div`
  background-color: blueviolet;
  width: 100%;
`;


const HomePage: React.FC = () => {
  return (
    <Base>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <Body>
        <Header isHome={true}>
          <IconButton icon={AiOutlineBell} />
        </Header>
      </Body>
    </Base>
  )
}

export default HomePage;