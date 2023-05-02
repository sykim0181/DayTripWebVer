import React from 'react';
import styled from '@emotion/styled/macro';
import Navigation from '../organisms/Navigation';

const Base = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavigationWrapper = styled.div`
  background-color: beige;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100vh;
`;

const Body = styled.div``;

const SearchBlock = styled.div``;

const FilterBlock = styled.div``;


const HomePage: React.FC = () => {
  return (
    <Base>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <Body>

      </Body>
    </Base>
  )
}

export default HomePage;