import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SportsProvider } from './contexts/SportsContext';
import Navbar from './components/layout/Navbar';
const Home = React.lazy(() => import('./pages/Home'));
const SportsMain = React.lazy(() => import('./pages/sport/SportsMain'));
import CheckAccess from './components/CheckAccess';
import Header from './components/layout/Header';
import { AdminProvider } from './contexts/AdminContext';

function App() {


  return (
    <div className="bg-background1 text-text1 flex flex-col min-h-screen">
      <Suspense fallback={<>Cargando</>} >
        <BrowserRouter basename="/dashboard">
          <AdminProvider>
          <CheckAccess>
            <SportsProvider>
            
              <div className="flex">
                <Navbar />
                <Header />
                  <div className="flex-grow py-10 mt-5">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sports" element={<SportsMain />} />
                      <Route path="*" element={<div>404</div>} />
                    </Routes>
                  </div>
              </div>
            </SportsProvider>
          </CheckAccess>
          </AdminProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;