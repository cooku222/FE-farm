import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../components/PostList";
import AddPostButton from "../components/AddPostButton";
import SearchBar from "../components/SearchBar";

const PostListPage = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{
      maxWidth: 420,
      margin: "0 auto",
      border: "2px solid #222",
      borderRadius: 20,
      minHeight: "100vh",
      background: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "24px 20px 0 20px",
        position: "relative",
      }}>
        <span style={{ fontWeight: 700, fontSize: 22 }}>불당동</span>
        <div
          style={{ marginLeft: "auto", position: "relative" }}
          onMouseEnter={() => setSearchVisible(true)}
          onMouseLeave={() => setSearchVisible(false)}
        >
          <span
            onClick={() => navigate("/kakao")}
            style={{
              display: "inline-block",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#eee",
              textAlign: "center",
              lineHeight: "32px",
              cursor: "pointer",
              fontSize: 20,
            }}
          >🔍</span>
          <div style={{
            position: "absolute",
            top: 0,
            right: 36,
          }}>
            <SearchBar
              visible={searchVisible}
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={{ padding: "0 20px" }}>
        <PostList />
      </div>
      <AddPostButton onClick={() => alert("글쓰기")} />
    </div>
  );
};

export default PostListPage;
