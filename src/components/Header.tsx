import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header style={{ background: "#ccc", padding: "10px" }}>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
        <div style={{ marginLeft: "auto" }}>
        {user ? (
          <>
            <span> {user} </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
