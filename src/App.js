import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import PostListPage from "./pages/PostListPage";
import Kakao from "./pages/SelectMap"; // 또는 정확한 경로


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/Kakao" element={<Kakao/>}/>
      </Routes>
    </Router>
  );
}

export default App;
