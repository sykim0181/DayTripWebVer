import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/macro';
import { AiOutlineClose, AiFillPlusCircle } from 'react-icons/ai';
import OptionBlock from '../molecules/OptionBlock';

const Base = styled.div`
  width: 450px;
  /* height: 600px; */
  /* background-color: beige; */
  border: 1px solid black;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* background-color: #d1a1ff; */
`;

const Title = styled.div`
  font-size: 23px;
  padding: 10px;
  font-weight: bold;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const Body = styled.div`
  /* background-color: #ffb69c; */
`;

const Content = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  /* background-color: blanchedalmond; */
`;

const AddPhotoButton = styled.div`
  font-size: 20px;
  border: 1px solid;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
  background-color: white;
  cursor: pointer;
  & p {
    font-size: 10px;
  }
`;

const PhotoContent = styled.div`
  background-color: lightgray;
  display: flex;
  align-items: center;
`;

const PhotoList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  padding: 18px 10px;
  /* background-color: aliceblue; */
  & li {
    list-style: none;
  }
  li + li {
    margin-left: 10px;
  }
`;


const Photo = styled.img`
  width: 100px;
`;

const TextArea = styled.textarea`
  width: 425px;
  height: 270px;
  resize: none;
  border: none;
  padding-top: 10px;
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


const PostModal: React.FC = () => {
  const stringList: string[] = [];
  const [imgUrlList, setImgUrlList] = useState(stringList);

  const fileInput = useRef<HTMLInputElement>(null);

  const fileBtnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (fileInput.current)
      fileInput.current.click();
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files){
      console.log(e.target.files[0]);
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

  useEffect(() => {
    console.log(imgUrlList);
  }, [imgUrlList]);

  return (
    <Base> 
      <Header>
        <Title>데이로그 작성</Title>
        <CloseButton><AiOutlineClose /></CloseButton>
      </Header>
      <Body>
        <Content>
          <PhotoContent>
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
            <PhotoList>
              {
                imgUrlList.map((url, i) => (
                  <Photo key={`photo-${i}`} src={url} />
                ))
              }
            </PhotoList>
          </PhotoContent>
          <TextArea 
            maxLength={400}
            placeholder='공간에서의 경험이나 정보를 자세히 작성할수록 다른 데이트리퍼에게 큰 도움이 될 거에요.'
          />
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
    </Base>
  )
}

export default PostModal;