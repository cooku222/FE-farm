import React from 'react';
import { Plus } from 'lucide-react';

const posts = [
  {
    content: '고추밭 끝나고 뻗었네요ㅋㅋ\n오늘 고추 20박스 딴 사람 저뿐이죠? 저녁에 막걸리 한잔 하실 분~?',
    time: '1분 전',
  },
  {
    content: '인삼 작업하시는 분들 요즘 몇 시부터 시작하세요?\n새벽 5시는 너무 빠른 거 같아서요...',
    time: '2분 전',
  },
  {
    content: '혹시 서천에 일손 많이 필요한 곳 있나요?\n다음 주부터 이틀 정도 시간 됩니다~',
    time: '2분 전',
  },
  {
    content: '비 와서 일 쉬는 날 = 휴가\n근데 할 게 없네요... 다들 뭐 하세요 비 오는 날?',
    time: '5분 전',
  },
];

export default function FreeBoard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-4 relative">
        <h2 className="text-gray-800 font-bold text-lg mb-4">충남 예산군 자유게시판</h2>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="border-b pb-2">
              <p className="whitespace-pre-line text-gray-800">{post.content}</p>
              <p className="text-xs text-gray-500 mt-1">{post.time}</p>
            </div>
          ))}
        </div>

        {/* Plus Button */}
        <button className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md">
          <Plus />
        </button>
      </div>
    </div>
  );
}
