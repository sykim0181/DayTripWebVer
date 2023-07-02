import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled/macro';
import Header from '../organisms/Header';
import Navigation from '../organisms/Navigation';
import { GiSettingsKnobs } from 'react-icons/gi';
import Spacer from '../atoms/Spacer';
import PlaceBlock from '../organisms/PlaceBlock';
import BasicPage from './BasicPage';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import app from '../../Firebase';

const Base = styled.div`
  /* background-color: aliceblue; */
`;


const PlaceListPart = styled.div`
  width: auto;
  height: fit-content;
  padding: 10px 20px;
  /* background-color: pink; */
  
`;

const PlaceContainer = styled.div`
  cursor: pointer;
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

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

export type place = {
  id: string,
  name: string,
  brief_address: string,
  category: string,
  loc: {
    lat: number,
    lng: number
  }
}

const PlacePage: React.FC = () => {
  const [places, setPlaces] = useState<place[]>([]);
  const [prevCenter, setPrevCenter] = useState<{lat:number,lng:number}>({lat:36.51235,lng:127.26106});
  const [curCenter, setCurCenter] = useState<{lat:number,lng:number}>({lat:36.51235,lng:127.26106});

  const db = getFirestore(app);

  const getPlaces = async () => {
    const q = query(collection(db, "places"), );
    const querySnapshot = await getDocs(q);
    return querySnapshot;
  }

  const placeMarkers = (map:any, list_place: place[]) => {
    list_place.forEach((val) => {
      const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      const imageSize = new kakao.maps.Size(24,30);
      const position = new kakao.maps.LatLng(val.loc.lat, val.loc.lng);

      const markerImage = new kakao.maps.MarkerImage(imageSrc,imageSize);

      const marker = new kakao.maps.Marker({
        map: map,
        position: position,
        image: markerImage,
        clickable: true
      })

      marker.setMap(map);

      // const content = `<div class ="label"><span class="left"></span><span class="center">${val.name}</span><span class="right"></span></div>`;
      const content = `<div class="label"><span>${val.name}</span></div>`;

      const customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content
      });

      customOverlay.setMap(map);

      const iwContent = ``;

      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: true
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map,marker);
      })
    })
  }

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(curCenter.lat, curCenter.lng),
      level: 3
    }
    const map = new kakao.maps.Map(container, options);

    getPlaces()
      .then((snapshot) => {
        let list_place: place[] = []; 
        snapshot.forEach((doc) => {
          const p: place = {
            id: doc.data().id,
            name: doc.data().name,
            brief_address: `${doc.data().city_address}, ${doc.data().dong_address}`,
            category: doc.data().category,
            loc: {
              lat: doc.data().lat,
              lng: doc.data().lng
            }
          } 
          list_place.push(p);
        })
        setPlaces(list_place);
        placeMarkers(map,places);
      }, (error) => console.log("No Place"));
    
    searchPlace();
  }, []);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(prevCenter.lat, prevCenter.lng),
      level: 3
    }
    const map = new kakao.maps.Map(container, options);
    
    placeMarkers(map,places);

    const moveLatLon = new kakao.maps.LatLng(curCenter.lat, curCenter.lng);
    map.panTo(moveLatLon);

  },[prevCenter, curCenter]);

  const searchPlace = () => {
    const ps = new kakao.maps.services.Places(); 
    ps.keywordSearch('헤이믈', (data:any,status:any,pagination:any) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
      }
    });
  }

  return (
    <Base>
      <BasicPage>
        <div id='map' style={{ 
          width: '100%',
          height: '400px'
        }}></div>
        <div style={{ padding: '10px' }}>
        <FilterPart>
            <FilterButton>
              <GiSettingsKnobs />
              <Spacer orientation='vertical' size={3} />
              필터
            </FilterButton>
        </FilterPart>
        <PlaceListPart>
          {
            places.map((place,idx)=> (
              <PlaceContainer id={`$place{idx}`} 
                onClick={() => {
                  setPrevCenter({
                    lat: curCenter.lat,
                    lng: curCenter.lng
                  });
                  setCurCenter({
                    lat: place.loc.lat,
                    lng: place.loc.lng
                  });
                }}
              >
                <PlaceBlock place={place} />
              </PlaceContainer>
            ))
          }
        </PlaceListPart>
      </div>
      </BasicPage>
    </Base>
  )
};

export default PlacePage;