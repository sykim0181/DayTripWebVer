import React, { ReactElement } from 'react';
import styled from '@emotion/styled/macro';
import Spacer from '../atoms/Spacer';
import { AiOutlineClose } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { isFilterShownAtom, selectedFiltersAtom } from '../../atoms';

const Base = styled.div`
  width: 250px;
  background-color: beige;
`;

const Header = styled.div`
  height: 25px;
  position: relative;
  /* background-color: pink; */
`;

const CloseButton = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;
`;

const FilterBlockList = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;

  & li {
    list-style: 0;
    margin: 0;
    padding: 0;
  }
`;


const FilterModal: React.FC = () => {

  const [isFilterShown, setIsFilterShown] = useRecoilState(isFilterShownAtom);
  const [selectedFilters, setSelectedFilters] = useRecoilState(selectedFiltersAtom);

  const filters = [
    {
      bcategory: "식음료",
      scategory: ["바", "카페", "음식점", "디저트/베이커리"]
    },
    {
      bcategory: "쇼핑",
      scategory: ["쇼핑몰", "숍", "서점", "시장"]
    }
  ];

  return (
    <Base>
      <Header>
        <CloseButton onClick={() => {
          setIsFilterShown(false);//모달 닫기
        }}>
          <AiOutlineClose />
        </CloseButton>
      </Header>
      <FilterBlockList>
        {
          filters.map((fb,idx) => (
            <li id={`filter_block_${idx}`}>
              {
                idx !== 0 ? (
                  <Spacer orientation='horizontal' size={10} />
                ) : <></>
              }
              <FilterBlock title={fb.bcategory} 
                selectAllOnClick={() => {
                  let newSelectedFilters: string[] = [];
                  filters[idx].scategory.forEach((val) => {
                    newSelectedFilters.push(val);
                  })
                  setSelectedFilters(newSelectedFilters);
                }}>
                {
                  fb.scategory.map((category) => (
                    <FilterElButton text={category} 
                      isSelected={selectedFilters.includes(category) ? true : false} 
                      onClick={() => {
                        if (selectedFilters.includes(category)){
                          console.log("included");
                          setSelectedFilters(selectedFilters.filter((val) => val!==category));
                        }
                        else {
                          console.log("excluded");
                          console.log([...selectedFilters, category]);
                          setSelectedFilters([...selectedFilters, category]);
                        }
                    }}/>
                  ))
                }
              </FilterBlock>
            </li>
          ))
        }
      </FilterBlockList>
    </Base>
  )
}

//FilterBlock
interface FilterBlockProps {
  title: string,
  children: ReactElement | ReactElement[],
  selectAllOnClick: () => void
}

const FilterBlock: React.FC<FilterBlockProps> = ({ title, children, selectAllOnClick }) => {
  const Base = styled.div`
    position: relative;
    /* background-color: pink; */
  `;

  const Header = styled.div`
    display: flex;
    margin-bottom: 5px;
    align-items: center;
  `;

  const Title = styled.div`
    font-weight: bold;
  `;

  const SelectAll = styled.div`
    position: absolute;
    right: 0;
    color: gray;
    font-size: 12px;
    cursor: pointer;
  `;

  const Body = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    & > {
      margin-bottom: 3px;
    }
  `;

  return (
    <Base>
      <Header>
        <Title>{title}</Title>
        <SelectAll onClick={selectAllOnClick}>모두 선택</SelectAll>
      </Header>
      <Body>
        {
          children
        }
      </Body>
    </Base>
  )
}

// FilterElButton
interface FilterElButtonProps {
  text: string,
  isSelected: boolean,
  onClick: ()=>void
}

const FilterElButton: React.FC<FilterElButtonProps> = (props) => {
  const Base = styled.div<{ isSelected: boolean }>`
    background-color: ${({ isSelected }) => isSelected ? "black" : "white"};
    border: 2px solid gray;
    border-radius: 20px;
    padding: 5px 15px;
    margin-right: 7px;
    margin-bottom: 5px;
    cursor: pointer;

    & span {
      white-space: nowrap;
      color: ${({ isSelected }) => isSelected ? "white" : "black"};
    }
  `;
  
  return (
    <Base isSelected={props.isSelected} onClick={props.onClick}>
      <span>{props.text}</span>
    </Base>
  )
}

export default FilterModal;