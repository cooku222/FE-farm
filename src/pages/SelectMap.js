import React, { useEffect } from "react";
import PostList from "../components/PostList";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
        center: new kakao.maps.LatLng(36.798837, 127.070375), //지도의 중심좌표.
        level: 3
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, [])

  return (
    <div style={{
      maxWidth: 420,
      margin: "0 auto",
      border: "2px solid #222",
      borderRadius: 20,
      minHeight: "100vh",
      background: "#fff",
      overflow: "hidden",
    }}>
      {/* 검색창 */}
      <div style={{ padding: 16, borderBottom: "1px solid #ccc" }}>
        <input
          type="text"
          placeholder="장소, 버스, 지하철, 주소 검색"
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 14,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* 지도 */}
      <div id="map" style={{ width: "100%", height: 250 }}></div>

      {/* 게시글 목록 */}
      <div style={{
        borderTop: "1px solid #ccc",
        padding: "0 16px",
        height: "calc(100vh - 250px - 60px)", // 전체 높이에서 지도 + 검색창 제외
        overflowY: "auto"
      }}>
        <PostList />
      </div>
    </div>
  );
}
export default Kakao;
