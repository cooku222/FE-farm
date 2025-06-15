import React from 'react';
// SVG로 직접 구현하거나, png/jpg 이미지를 import해서 사용 가능
function Logo({ size = 120 }) {
  return (
    <img src={require('../assets/logo.png')} alt="청년팜 로고"
      style={{ width: size, height: size }} />
  );
}
export default Logo;
