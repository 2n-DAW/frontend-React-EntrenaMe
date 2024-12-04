import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SportContextProvider } from './contexts/SportsContext';
import Navbar from "./components/layout/Navbar";

const Dashboard = React.lazy(() => import( "./pages/admin/Dashboard"));
const SportsGet = React.lazy(() => import('./pages/admin/sport/SportsGet'));
const SportsAdd = React.lazy(() => import('./pages/admin/sport/SportsAdd'));
const SportsUpdate = React.lazy(() => import('./pages/admin/sport/SportsUpdate'));

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
                            <Route path="/dashboard/sports/add" element={<SportsAdd/>}/>
                            <Route path="/dashboard/sports/update/:slug" element={<SportsUpdate/>}/>
                        </Routes>
                    </div>
                </SportContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App
