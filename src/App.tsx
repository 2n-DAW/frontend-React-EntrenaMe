import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';

import { SportContextProvider } from './context/SportsContext';
import Navbar from "./components/admin/Navbar";

const Dashboard = React.lazy(() => import( "./pages/admin/Dashboard"));
const SportsGet = React.lazy(() => import('./pages/admin/sport/SportsGet'));

function App() {
    return (
        <div className="flex min-h-screen overflow-hidden">
            <BrowserRouter>
                <SportContextProvider>
                    <Navbar />
                    <div className="flex-grow overflow-auto">
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/dashboard/sports" element={<SportsGet/>}/>
                        </Routes>
                    </div>
                </SportContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App
