import React from 'react';
import styled from '@emotion/styled/macro';
import { IconType } from 'react-icons/lib';


const Base = styled.div`
  font-size: 40px;
  cursor: pointer;
  list-style: none;
  color: black;
  /* background-color: aqua; */
`;


interface Props {
  icon: IconType,
  url?: string
}

const IconButton: React.FC<Props> = (props) => {
  const Icon = props.icon;

  return (
    <Base>
      <Icon />
    </Base>
  )
}

export default IconButton;