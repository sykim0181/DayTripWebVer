import React from 'react';
import styled from '@emotion/styled/macro';
import Toggle from '../atoms/Toggle';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Base = styled.div`
  /* background-color: #e5c8ff; */
  display: flex;
  align-items: center;
  position: relative;
`;

const Text = styled.div<{ isNecessary:boolean }>`
  padding: 10px;
  padding-left: 20px;
  & h1 {
    font-size: 15px;
    margin: 0;
    /* background-color: aliceblue; */
  }
  /* background-color: pink; */
`;

const ExtraText = styled.div`
  font-size: 10px;
  color: gray;
`;

const BtnTgl = styled.div`
  position: absolute;
  right: 120px;
`;

const Button = styled.div`
  font-size: 22px;
  cursor: pointer;
`;


interface Props {
  title: string,
  isNecessary: boolean,
  extraText?: string
  hasToggle: boolean
}

const OptionBlock: React.FC<Props> = (props) => {
  return (
    <Base>
      <Text isNecessary={props.isNecessary}>
        <h1>{props.title}</h1>
        <ExtraText>{props.extraText}</ExtraText>
      </Text>
      <BtnTgl>
        {
          props.hasToggle ? (
            <Toggle />
          ) : (
            <Button>
              <MdOutlineKeyboardArrowRight />
            </Button>
          )
        }
      </BtnTgl>


    </Base>
  )
}

export default OptionBlock;