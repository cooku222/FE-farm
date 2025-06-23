import React from "react";
import { useNavigate } from "react-router-dom";
import JobDetail from "../pages/PostListDetailPage";

const PostItem = ({ image, title, price, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/JobDetail`)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px 0",
        borderBottom: "1px solid #eee",
        cursor: "pointer",
      }}
    >
      <div style={{
        width: 56,
        height: 56,
        background: "#ddd",
        borderRadius: 8,
        marginRight: 16,
        flexShrink: 0,
        overflow: "hidden",
      }}>
        {image ? (
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>
        <div style={{ color: "#888", fontSize: 15 }}>{description}</div>
        <div style={{ color: "#22c55e", fontWeight: 700, fontSize: 15 }}>{price}</div>
      </div>
    </div>
  );
};

export default PostItem;
