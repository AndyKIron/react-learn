import React from "react";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";
import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
