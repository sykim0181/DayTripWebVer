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
  width: fit-content;
  height: fit-content;
`;

const IconList = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 0;

  & li {
    list-style: none;
    padding: 30px 30px;
    color: black;
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;

const Icon = styled.div`
  font-size: 50px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Navigation: React.FC = () => {
  const [selectedNav, setSelectedNav] = useRecoilState(selectedNavAtom);

  return(
    <Base>
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
              }            </Icon>
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
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mypage" onClick={() => setSelectedNav("mypage")}>
            <Icon>
              <ProfileImg src='assets/ky.jpg' />
            </Icon>     
          </StyledLink>
        </li>
      </IconList>
    </Base>
  )
}

export default Navigation;