import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <main style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
