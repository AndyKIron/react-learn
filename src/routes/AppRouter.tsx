import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/*Public routes */}
      <Route path="/login" element={<Login />} />

      {/* Private routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<PrivateRoute />}>
          <Route index element={<About />} />
        </Route>
        <Route path="contact" element={<PrivateRoute />}>
          <Route index element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
