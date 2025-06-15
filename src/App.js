import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import PostListPage from "./pages/PostListPage";
import SelectMap from './pages/SelectMap.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/map_home" element={<SelectMap/>}/>
      </Routes>
    </Router>
  );
}

export default App;
