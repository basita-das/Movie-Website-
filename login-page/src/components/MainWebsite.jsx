import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../pages/pages/components/NavBar";
import Home from "../pages/pages/pages/Home";
import Favorites from "../pages/pages/pages/Favorites";
import { MovieProvider } from "../pages/pages/contexts/MovieContext";
function MainWebsite({ username }) {
  return (
    <MovieProvider>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "#A31621",
          background: "#FFF4E0",
        }}
      >
        Welcome, {username}. Enjoy your movie🍿
      </h2>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="" element={<Home />} /> {/* /movies */}
          <Route path="favorites" element={<Favorites />} />{" "}
          {/* /movies/favorites */}
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default MainWebsite;
