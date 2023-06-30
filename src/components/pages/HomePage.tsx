import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import BasicPage from './BasicPage';
import PostBlock from '../organisms/PostBlock';
import app from '../../Firebase';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import Spacer from '../atoms/Spacer';


const Base = styled.div`
  background-color: #b8b8b8;
`;


const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeader = styled.div`
  /* background-color: aliceblue; */
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
`;


type post = {
  text: string,
  photo: string[],
  writer: string
}


const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<post[]>([]);

  const db = getFirestore(app);
  
  const getPosts = async () => {
    const q = query(collection(db, "posts"), );
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  // getPosts();
  useEffect(() => {
    getPosts()
      .then((snapshot) => {
        let list_post: post[] = []; 
        snapshot.forEach((doc) => {
          const p: post = {
            text: doc.data().textContent,
            photo: doc.data().photos,
            writer: "soxoy0181"
          } 
          list_post.push(p);
        })
        setPosts(list_post);
      }, (error) => console.log("No Feed"))
  }, []);

  return (
    <Base>
      <BasicPage>
        <Contents>
          <ContentHeader>
            <Spacer orientation='vertical' size={10} />
            <h1>soxoy0181님의 피드</h1>
          </ContentHeader>
          {
            posts.map((post, idx) => (
              <div>
                <PostBlock 
                  key={`pb-${idx}`}
                  username={post.writer}  
                  photos={post.photo}
                  text={post.text}
                />
                <Spacer orientation='horizontal' size={35} />
              </div>

            ))
          }
        </Contents>
      </BasicPage>
    </Base>
  )
}

export default HomePage;