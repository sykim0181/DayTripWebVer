import React, { ReactElement } from 'react';
import styled from '@emotion/styled/macro';
import { IconType } from 'react-icons/lib';
import Spacer from '../atoms/Spacer';
import IconButton from '../atoms/IconButton';

const Base = styled.div`
  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 70px;
  position: relative;
`;

const LeftPart = styled.div`
  /* background-color: yellow; */
  margin-left: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  & > :nth-of-type(even) {
    margin-left: 20px;
  }
  position: absolute;
  right: 40px;
`;


interface HeaderProps {
  isHome: boolean,
  children: ReactElement | ReactElement[]
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Base>
      <LeftPart>
        {
          props.isHome ? (
            <Title>daytrip</Title>
          ) : (
            <></>
          )
        }
      </LeftPart>
      <ButtonList>
        {props.children}
      </ButtonList>
    </Base>
  )
}


export default Header;
