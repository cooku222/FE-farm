import React from 'react';

export default function JobDetail() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* 헤더 */}
        <div className="text-gray-400 text-sm px-4 pt-4">일자리 추천 상세 페이지</div>

        {/* 이미지 영역 */}
        <div className="relative bg-gray-300 h-40 flex items-center justify-center">
          {/* 추후 여기에 이미지 삽입 */}
          <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold rounded-full px-2 py-1">
            수빈
          </span>
        </div>

        {/* 본문 내용 */}
        <div className="px-4 py-4 space-y-2">
          <h2 className="text-sm text-gray-500 font-medium">귀농 청년 모집</h2>

          <p className="text-gray-800 font-medium">고추 수확 도와주실 분 구해요</p>
          <p className="text-gray-700 text-sm">충남 부여군 석성면 <span className="text-gray-400">21시간 전</span></p>

          <div className="pt-3 space-y-1 text-sm text-gray-800">
            <p>💸 <b>월급:</b> 일당 9만원 (점심 제공)</p>
            <p>📅 <b>근무 요일:</b> 월~금</p>
            <p>🕐 <b>시간:</b> 오전 7시 ~ 오후 4시</p>
          </div>

          <div className="pt-3 text-sm text-gray-800 space-y-1">
            <p>🌿 <b>업무 내용:</b> 고추밭에서 수확 보조. 경력 없어도 환영해요!</p>
            <p>🚗 차량 있으시면 좋아요 (픽업 가능)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
