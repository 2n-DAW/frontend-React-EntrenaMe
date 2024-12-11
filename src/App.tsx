import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SportsProvider } from './contexts/SportsContext';
import Navbar from './components/layout/Navbar';
// import { checkAccess } from './services/authService'; // Importa la función de verificación
const Home = React.lazy(() => import('./pages/Home'));
const SportsMain = React.lazy(() => import('./pages/sport/SportsMain'));
const SportsCreate = React.lazy(() => import('./pages/sport/SportsCreate'));
const SportsUpdate = React.lazy(() => import('./pages/sport/SportsUpdate'));
import CheckAccess from './components/CheckAccess';

function App() {


  return (
    <div className="bg-background1 text-text1 flex flex-col min-h-screen">
      <Suspense fallback={<>Cargando</>} >
        <BrowserRouter basename="/dashboard">
          <CheckAccess>
            <SportsProvider>
              <div className="flex">
                <Navbar />
                  <div className="flex-grow py-10">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sports" element={<SportsMain />} />
                      <Route path="/sports/create" element={<SportsCreate />} />
                      <Route path="/sports/update/:slug_sport" element={<SportsUpdate />} />
                      <Route path="*" element={<div>404</div>} />
                    </Routes>
                  </div>
              </div>
            </SportsProvider>
          </CheckAccess>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;