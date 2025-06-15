// components/SearchBar.js
import React from "react";

const SearchBar = ({ visible, value, onChange }) => (
  visible ? (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="검색"
      style={{
        marginLeft: 12,
        padding: "8px 12px",
        borderRadius: 8,
        border: "1px solid #ccc",
        fontSize: 16,
        width: 180,
        transition: "all 0.2s",
      }}
      autoFocus
    />
  ) : null
);

export default SearchBar;
