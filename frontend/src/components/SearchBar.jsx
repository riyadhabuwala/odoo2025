import React from "react";

const searchBarContainerStyle = {
  display: "flex",
  alignItems: "center",
  background: "#fff",
  border: "2px solid #000",
  borderRadius: "24px",
  padding: "6px 16px",
  width: "100%",
  boxSizing: "border-box",
};

const inputStyle = {
  border: "none",
  outline: "none",
  background: "transparent",
  color: "#000",
  fontSize: "1rem",
  flex: 1,
  padding: "8px 0",
};

const buttonStyle = {
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "16px",
  padding: "8px 18px",
  fontSize: "1rem",
  cursor: "pointer",
  marginLeft: "8px",
  fontWeight: 600,
};

function SearchBar({ placeholder = "Search..." }) {
  const [value, setValue] = React.useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the search logic here
    // For now, just log the value
    console.log("Search:", value);
  };

  return (
    <form style={searchBarContainerStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        style={inputStyle}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button type="submit" style={buttonStyle}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;

