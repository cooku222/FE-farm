// components/AddPostButton.js
import React from "react";

const AddPostButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "fixed",
      right: 24,
      bottom: 24,
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "#22c55e",
      color: "#fff",
      fontSize: 36,
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      cursor: "pointer",
      zIndex: 10,
    }}
    aria-label="글 추가"
  >
    +
  </button>
);

export default AddPostButton;
