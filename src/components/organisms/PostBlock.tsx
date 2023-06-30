import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Spacer from '../atoms/Spacer';

const Base = styled.div`
  background-color: white;
  border: 1px solid;
  width: fit-content;
  padding: 15px;
`;

const Header = styled.div`
  background-color: brown;
`;

const UserProfile = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
`;

const UserProfilePhoto = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: pink;
  margin-right: 12px;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
  }
`;

const PhotoContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  width: 500px;
  margin: 0 20px;
`;

const ArrowIcon = styled.div`
  font-size: 20px;
  color: grey;
  cursor: pointer;
`;

const SlideContainer = styled.div`
  display: flex;
  /* background-color: green; */
  justify-content: center;
  padding: 5px 0;
`;

const SlideElement = styled.div<{ isCurrent:boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isCurrent }) =>  isCurrent ? "gray" : "lightgray"};
  margin: 1px;
`;

const TextContent = styled.div`
  margin-top: 10px;
`;

interface Props {
  profileImg?: string,
  username: string,
  photos: string[];
  text: string
}

const PostBlock: React.FC<Props> = (props) => {
  const [slideNum, setSlideNum] = useState(0);

  const hasMoreThanOnePhoto = props.photos.length > 1 ? true : false;


  return (
    <Base>
      <Header>
        <UserProfile>
          <UserProfilePhoto>
            <img src='assets/ky.jpg' alt='profile' />
          </UserProfilePhoto>
          <p>{props.username}</p>
        </UserProfile>
      </Header>
      <PhotoContainer>
      {
        hasMoreThanOnePhoto ? (
          <ArrowIcon onClick={() => {
            if (slideNum !== 0)
              setSlideNum(slideNum-1);
          }}>
            <BsFillArrowLeftCircleFill />
          </ArrowIcon>
        ) : (<Spacer orientation='vertical' size={20} />)
      }
        <Photo src={props.photos[slideNum]} />
      {
        hasMoreThanOnePhoto ? (
          <ArrowIcon onClick={() => {
            if (slideNum !== props.photos.length-1) 
              setSlideNum(slideNum+1);
          }}>
            <BsFillArrowRightCircleFill />
          </ArrowIcon>
        ) : (<Spacer orientation='vertical' size={20} />)
      }
      </PhotoContainer>
      {
        hasMoreThanOnePhoto ? (
          <SlideContainer>
            {
              props.photos.map((_,idx) => (
                <SlideElement isCurrent={idx===slideNum ? true : false} />
              ))
            }
          </SlideContainer>
        ) : (<></>)
      }
      <TextContent>{props.text}</TextContent>
    </Base>
  )
}

export default PostBlock;