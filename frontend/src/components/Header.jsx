import React from "react";
import logo from "../assets/images/rewear.png.png"; // Fixed path
import { Link } from "react-router-dom";

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 40px",
  background: "#ffd1dc", // pastel pink
};

const logoStyles = {
  height: "80px",
};

const headerButtonsStyles = {
  display: "flex",
  gap: "18px",
};

const btnBase = {
  padding: "10px 24px",
  border: "2px solid #000",
  borderRadius: "24px",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  background: "transparent",
  color: "#fff",
  transition: "background 0.2s, color 0.2s",
};

const centerTextStyles = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontFamily: "'Great Vibes', cursive", // Use imported font
  fontSize: "70px",
  fontWeight: "normal",
  color: "#000",
  whiteSpace: "nowrap",
};

const signupBtnStyles = { ...btnBase };
const userBtnStyles = { ...btnBase };

function Header() {
  const [signupHover, setSignupHover] = React.useState(false);
  const [userHover, setUserHover] = React.useState(false);

  return (
    <header style={headerStyles}>
      <img src={logo} alt="Logo" style={logoStyles} />
      <div style={centerTextStyles}>ReWear</div>
      <div style={headerButtonsStyles}>
        <Link to="/Signup">
          <button
            style={
              signupHover
                ? {
                    ...signupBtnStyles,
                    background: "#fff",
                    color: "#ffd1dc",
                  }
                : signupBtnStyles
            }
            onMouseEnter={() => setSignupHover(true)}
            onMouseLeave={() => setSignupHover(false)}
          >
            Sign Up
          </button>
        </Link>

        <Link to="/Dashboard">
          <button
            style={
              userHover
                ? {
                    ...userBtnStyles,
                    background: "#fff",
                    color: "#ffd1dc",
                  }
                : userBtnStyles
            }
            onMouseEnter={() => setUserHover(true)}
            onMouseLeave={() => setUserHover(false)}
          >
            User
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
