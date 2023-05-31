import React from 'react';
import styled from '@emotion/styled/macro';
import Header from '../organisms/Header';
import Navigation from '../organisms/Navigation';
import { GiSettingsKnobs } from 'react-icons/gi';
import Spacer from '../atoms/Spacer';
import PlaceBlock from '../organisms/PlaceBlock';
import BasicPage from './BasicPage';

const Base = styled.div`

`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  background-color: purple;
`;

const PlaceListPart = styled.div`
  width: auto;
  height: fit-content;
  padding: 10px 20px;
  background-color: pink;
  
`;

const FilterPart = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: fit-content;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid lightgray;
  cursor: pointer;
`;

const FilterStandard = styled.div`
  background-color: aliceblue;
  position: absolute;
  right: 0;
`;


const PlacePage: React.FC = () => {
  return (
    <Base>
      <BasicPage>
        <Map>

        </Map>
        <FilterPart>
            <FilterButton>
              <GiSettingsKnobs />
              <Spacer orientation='vertical' size={3} />
              필터
            </FilterButton>
            <FilterStandard>거리순</FilterStandard>
          </FilterPart>
        <PlaceListPart>
          <PlaceBlock />
        </PlaceListPart>
      </BasicPage>
    </Base>
  )
};

export default PlacePage;