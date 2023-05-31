import React, { ReactElement } from 'react';
import styled from '@emotion/styled/macro';
import Navigation from '../organisms/Navigation';

const Base = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: aliceblue;
`;

const NavigationWrapper = styled.div`
  background-color: pink;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const Body = styled.div`
  background-color: beige;
  width: 100%;
`;

interface Props {
  children: ReactElement | ReactElement[]
}

const BasicPage: React.FC<Props> = (props) => {
  return (
    <Base>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <Body>
        {
          props.children
        }
      </Body>
    </Base>

  )
}

export default BasicPage;