import React, { useState } from 'react';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', background: '#fff'
    }}>
      <form style={{
        width: 320, padding: 32, borderRadius: 16, boxShadow: '0 0 12px #eee',
        background: '#fff', display: 'flex', flexDirection: 'column', gap: 20
      }}>
        <input
          type="text"
          placeholder="아이디(이메일)"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          style={{
            border: '2px solid #388a44', borderRadius: 8, padding: 12, fontSize: 16
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            border: '2px solid #388a44', borderRadius: 8, padding: 12, fontSize: 16
          }}
        />
        <button type="submit" style={{
          background: '#388a44', color: '#fff', fontWeight: 700,
          border: 'none', borderRadius: 8, padding: 14, fontSize: 18, marginTop: 10
        }}>
          로그인
        </button>
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <a href="/signup" style={{ color: '#999', fontSize: 14, textDecoration: 'none' }}>
            회원가입 &nbsp;|&nbsp; 아이디/비밀번호 찾기
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
