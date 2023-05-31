import React from 'react';
import styled from '@emotion/styled/macro';
import Navigation from '../organisms/Navigation';
import Header from '../organisms/Header';
import IconButton from '../atoms/IconButton';
import { AiOutlineBell } from 'react-icons/ai';
import BasicPage from './BasicPage';

const Base = styled.div`

`;


const HomePage: React.FC = () => {
  return (
    <Base>
      <BasicPage>

      </BasicPage>
    </Base>
  )
}

export default HomePage;