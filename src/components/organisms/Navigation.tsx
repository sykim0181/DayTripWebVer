import React from 'react';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';


const Base = styled.div`
  /* background-color: beige; */
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
    padding: 30px 10px;
    color: black;
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;

const Icon = styled.div`
  font-size: 40px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Navigation: React.FC = () => {
  return(
    <Base>
      <IconList>
        <li>
          <StyledLink to="/">
            <Icon>
              <GrHomeRounded />
            </Icon>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/place">
            <Icon>
              <IoLocationSharp />
            </Icon>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/post">
            <Icon>
              <AiOutlinePlusCircle />
            </Icon>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/bookmark">
            <Icon>
              <BsBookmark />
            </Icon>    
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/mypage">
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