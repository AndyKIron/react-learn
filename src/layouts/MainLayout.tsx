import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./MainLayout.css";

const MainLayout: React.FC = () => {
    return (
        <div className="main-layout">
            <Header />
            <div style={{ display: "flex", flexGrow: 1 }}>
                <main style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
