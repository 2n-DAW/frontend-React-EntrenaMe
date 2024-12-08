import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SportsProvider } from './contexts/SportsContext';
import Navbar from './components/layout/Navbar';
const Home = React.lazy(() => import('./pages/Home'));
const SportsMain = React.lazy(() => import('./pages/sport/SportsMain'));
const SportsCreate = React.lazy(() => import('./pages/sport/SportsCreate'));
const SportsUpdate = React.lazy(() => import('./pages/sport/SportsUpdate'));


function App() {

  return (
    <div className="bg-background1 text-text1 flex flex-col min-h-screen">
      <Suspense fallback={<>Cargando</>} >
        <SportsProvider>
          <BrowserRouter>
            <div className="flex">
              <Navbar />
              <div className="flex-grow py-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sports" element={<SportsMain />} />
                  <Route path="/sports/create" element={<SportsCreate/>}/>
                  <Route path="/sports/update/:slug_sport" element={<SportsUpdate/>}/>
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </SportsProvider>
      </Suspense>
    </div>
  );
}

export default App;