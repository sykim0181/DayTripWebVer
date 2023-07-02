import React from 'react';
import styled from '@emotion/styled/macro';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoBookmarkOutline } from 'react-icons/io5';
import { place } from '../pages/PlacePage';

const Base = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  /* background-color: beige; */
  width: fit-content;
`;

const Name = styled.h1`
  margin: 0;
`;

const Explanation = styled.p`
  margin: 0;
  margin-top: 8px;
  color: gray;
`;

const Buttons = styled.div`
  display: flex;
  /* background-color: aqua; */
  position: absolute;
  right: 0;
`;

const Button = styled.div`
  font-size: 50px;
  margin-left: 25px;
  cursor: pointer;
`;


const Body = styled.div``;

const PhotoList = styled.ul`
  & li {
    list-style: none;
  }
`;

const Photo = styled.img``;

interface Props {
  place: place
}
const PlaceBlock: React.FC<Props> = (props) => {
  return (
    <Base>
      <Header>
        <Title>
          <Name>{props.place.name}</Name>
          <Explanation>{`${props.place.brief_address} · ${props.place.category}`}</Explanation>
        </Title>
        <Buttons>
          <Button><AiOutlineCheckCircle /></Button>
          <Button><IoBookmarkOutline /></Button>
        </Buttons>
      </Header>
      <Body>
        <PhotoList>
          <li>
            <Photo />
          </li>
        </PhotoList>
      </Body>
    </Base>
  )
}

export default PlaceBlock;