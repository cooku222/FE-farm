import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Map_Home() {
  let map: naver.maps.Map;
  let mapOption = {
    center: new naver.maps.LatLng(37.52133, 126.9522),
    zoom: 17,
    minZoom: 15,
    tileDuration: 300,
    // 확대 시 타일 변경되는 시간
    baseTileOpacity: 1,
    // 타일 투명도 ( 투명도 낮추면 배경 색이 보임 )
    background: 'white',
    //배경 색
    tileSpare: 7,
    //화면 바깥 여분 타일 개수
  };
  useEffect(() => {
    if (!map) {
      map = new naver.maps.Map('map', mapOption);
      console.log(map);
    }
  }, []);
  return (
    <>
      <MapContainer id="map"></MapContainer>
    </>
  );
}

export default Map_Home;

const MapContainer = styled.div`
  height: 100vh;
`;