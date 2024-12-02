import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { SportContextProvider } from './context/SportsContext';

const Dashboard = React.lazy(() => import( "./pages/admin/Dashboard"));

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SportContextProvider>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </SportContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App
