// components/PostList.js
import React, { useEffect, useRef, useState } from "react";
import PostItem from "./PostItem";

const mockFetchPosts = (page) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 10 }, (_, i) => ({
        id: page * 10 + i,
        title: ["고추 수확 도와주실 분 구해요", "고구마 캐실 분 찾습니다", "벼 베는 날, 하루 도와주세요"][i % 3],
        price: ["일당 9만원 (점심 제공)", "일당 10만원", "하루 11만원"][i % 3],
        description: "",
        image: null,
      })));
    }, 800);
  });

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    setLoading(true);
    mockFetchPosts(page).then((newPosts) => {
      setPosts((prev) => [...prev, ...newPosts]);
      setLoading(false);
      if (newPosts.length === 0) setHasMore(false);
    });
  }, [page]);
useEffect(() => {
  if (!hasMore) return;
  const currentLoader = loader.current;
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prev) => prev + 1);
      }
    },
    { threshold: 1 }
  );
  if (currentLoader) observer.observe(currentLoader);
  return () => {
    if (currentLoader) observer.unobserve(currentLoader);
  };
}, [loading, hasMore]);

  return (
    <div style={{ overflowY: "auto", height: "calc(100vh - 80px)" }}>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
      {loading && <div style={{ textAlign: "center", padding: 20 }}>로딩중...</div>}
      <div ref={loader}></div>
    </div>
  );
};

export default PostList;
