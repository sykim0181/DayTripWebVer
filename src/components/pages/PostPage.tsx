import React, { useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { AiFillPlusCircle } from 'react-icons/ai';
import BasicPage from './BasicPage';
import OptionBlock from '../molecules/OptionBlock';
import app from '../../Firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Base = styled.div`

`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 80px 0 40px 20px;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

const PostButton = styled.div`
  background-color: pink;
  padding: 10px 25px;
  border-radius: 15px;
  font-weight: bold;
  position: absolute;
  right: 120px;
  cursor: pointer;
`;

const Body = styled.div`
  /* background-color: #ffb69c; */
`;

const Content = styled.div`
  margin: 0 0 10px 20px;
  display: flex;
`;

const PhotoContent = styled.div`
  background-color: lightgray;
  /* width: 250px; */
  padding: 20px;
`;

const AddPhotoButton = styled.div`
  font-size: 20px;
  border: 1px solid;
  width: 80px;
  height: 80px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  cursor: pointer;
  & p {
    font-size: 10px;
  }
`;

const PhotoList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 120px 120px 120px;
  /* background-color: aliceblue; */
  & li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Photo = styled.img`
  width: 80px;
  height: 100px;
`;

const TextArea = styled.textarea`
  width: 800px;
  height: 420px;
  resize: none;
  border: none;
  padding: 30px;
  margin-right: 30px;
  max-lines: 15;
  font-size: 17px;
  
  &:focus {
    outline: none;
  }
  /* background-color: #ffd5d5; */
`;

const Options = styled.div`
  border-top: 6px solid lightgray;
  & >:nth-of-type(even) {
    border-top: 2px solid lightgray;
  }
`;

const PostPage: React.FC = () => {
  const stringList: string[] = [];
  const [imgUrlList, setImgUrlList] = useState(stringList);

  const fileInput = useRef<HTMLInputElement>(null);
  const textAreaInput = useRef<HTMLTextAreaElement>(null);

  const fileBtnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (fileInput.current)
      fileInput.current.click();
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files){
      // console.log(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) => {
        if (event.target?.result){
          const url = event.target.result.toString();
          setImgUrlList([...imgUrlList, url]);
        }      
      }
    }
  }

  const db = getFirestore(app);

  const postBtnClick = async () => {
    try {
      // console.log(textAreaInput.current?.value);
      if (imgUrlList.length > 0){
        await addDoc(collection(db, "posts"), {
          textContent: textAreaInput.current?.value,
          photos: imgUrlList,
          writer: "soxoy0181",
          
        }).then(() => alert("게시물 등록!"));
      } else {
        alert("사진을 1장 이상 추가해주세요!")
      }
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Base>
      <BasicPage>
        <Header>
          <Title>데이로그 작성</Title>
          <PostButton onClick={postBtnClick}>등록</PostButton>
        </Header>
        <Body>
          <Content>
            <TextArea 
              maxLength={400}
              placeholder='공간에서의 경험이나 정보를 자세히 작성할수록 다른 데이트리퍼에게 큰 도움이 될 거에요.'
              ref={textAreaInput}
            />
            <PhotoContent>
              <PhotoList>
                <li>
                  <AddPhotoButton onClick={fileBtnClick}>
                    <AiFillPlusCircle />
                    <p>사진 추가</p>
                  </AddPhotoButton>
                  <input 
                    type="file" 
                    accept='image/gif,image/jpeg,image/png'
                    ref={fileInput} 
                    onChange={inputChangeHandler}
                    style={{ display: "none" }} 
                  />
                </li>
                {
                  imgUrlList.map((url, i) => (
                    <li>
                      <Photo key={`photo-${i}`} src={url} />
                    </li>
                  ))
                }
              </PhotoList>
            </PhotoContent>
          </Content>
          <Options>
            <OptionBlock title='공간 추가' isNecessary={true} hasToggle={false} />
            <OptionBlock 
              title='전체 공개'
              extraText='콘텐츠가 데이트립 마케팅 채널에 소개될 수 있어요'
              isNecessary={false} 
              hasToggle={true} 
            />
          </Options>
        </Body>
      </BasicPage>
    </Base>
  )
}

export default PostPage;
