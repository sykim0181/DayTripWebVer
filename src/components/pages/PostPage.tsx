import React from 'react';
import styled from '@emotion/styled/macro';
import PostModal from '../organisms/PostModal';
import Navigation from '../organisms/Navigation';
import BasicPage from './BasicPage';

const Base = styled.div`

`;

const PostPage: React.FC = () => {

  return (
    <Base>
      <BasicPage>
        <PostModal />
      </BasicPage>
    </Base>
  )
}

export default PostPage;
