import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import PostListPage from "./pages/PostListPage";
import Kakao from "./pages/SelectMap"; // 또는 정확한 경로
import JobDetail from "./pages/PostListDetailPage";
import FreeBoard from "./pages/FreeBoard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/Kakao" element={<Kakao/>}/>
        <Route path="/JobDetail" element={<JobDetail />} />
        <Route path="/FreeBoard" element={<FreeBoard />} />
      </Routes>
    </Router>
  );
}
export default App;
