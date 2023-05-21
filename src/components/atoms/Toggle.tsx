import React, { useState } from 'react';
import styled from '@emotion/styled/macro';

const Base = styled.div<{ isOn: boolean }>`
  background-color: ${({ isOn }) => isOn ? "black" : "lightgray"};
  width: 65px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .5s;
`;

const Circle = styled.div<{ isOn: boolean }>`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  left: ${({ isOn }) => isOn ? "2px" : "38px"};
  transition: all .5s;
`;


const Toggle: React.FC = () => {
  const [isOn,setIsOn] = useState(false);
  
  return (
    <Base isOn={isOn} onClick={() => setIsOn(!isOn)}>
      <Circle isOn={isOn} className={isOn ? "on" : "off"} />
    </Base>
  )
}

export default Toggle;