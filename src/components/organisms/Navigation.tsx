import React from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { GrHomeRounded } from 'react-icons/gr';
import { IoLocationSharp, IoLocationOutline, IoHomeOutline, IoHomeSharp, IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import { HiOutlinePlusCircle, HiPlusCircle } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';
import { selectedNavAtom } from '../../atoms';


const Base = styled.div`
  background-color: aqua;
  padding: 0 70px 0 20px;
`;

const Title = styled.div`
  font-size: 45px;
  margin: 65px 0 70px 0;
`;

const IconList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;

  & li {
    list-style: none;
  }
  & li + li {
    margin-top: 20px;
  }

`;

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  text-decoration: none;
  align-items: center;
`;


const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Text = styled.div`
  white-space: nowrap;
  margin-left: 5px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Navigation: React.FC = () => {
  const [selectedNav, setSelectedNav] = useRecoilState(selectedNavAtom);

  return(
    <Base>
      <Title>daytrip</Title>
      <IconList>
        <li>
          <StyledLink to="/" onClick={() => setSelectedNav("home")}>
            <Icon>
              {
                selectedNav==="home" ? (
                  <IoHomeSharp />
                ) : (
                  <IoHomeOutline />
                )
              }            
            </Icon>
            <Text>홈</Text>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/place" onClick={() => setSelectedNav("place")}>
            <Icon>
              {
                selectedNav==="place" ? (
                  <IoLocationSharp />
                ) : (
                  <IoLocationOutline />
                )
              }
            </Icon>
            <Text>플레이스</Text>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/post" onClick={() => setSelectedNav("post")}>
            <Icon>
              {
                selectedNav==="post" ? (
                  <HiPlusCircle />
                ) : (
                  <HiOutlinePlusCircle />
                )
              }
            </Icon>
            <Text>글쓰기</Text>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/bookmark" onClick={() => setSelectedNav("bookmark")}>
            <Icon>
              {
                selectedNav==="bookmark" ? (
                  <IoBookmark />
                ) : (
                  <IoBookmarkOutline />
                )
              }            
              </Icon>
              <Text>북마크</Text>    
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mypage" onClick={() => setSelectedNav("mypage")}>
            <Icon>
              <ProfileImg src='assets/ky.jpg' />
            </Icon>     
            <Text>마이페이지</Text>
          </StyledLink>
        </li>
      </IconList>
    </Base>
  )
}

export default Navigation;