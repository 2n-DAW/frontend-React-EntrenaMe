import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SportsProvider } from './contexts/SportsContext';
import { CourtProvider } from './contexts/CourtContext';
import Navbar from './components/layout/Navbar';
const Home = React.lazy(() => import('./pages/Home'));
const SportsMain = React.lazy(() => import('./pages/sport/SportsMain'));
const ActivityMain = React.lazy(() => import('./pages/activity/ActivityMain'));
import CheckAccess from './components/CheckAccess';
import Header from './components/layout/Header';
import { AdminProvider } from './contexts/AdminContext';
import CourtHourMain from './pages/court-hour/CourtHourMain';
import { CourtHourProvider } from './contexts/CourtHourContext';
import { ActivitiesProvider } from './contexts/ActivityContext';

function App() {


  return (
    <div className="bg-background1 text-text1 flex flex-col min-h-screen">
      <Suspense fallback={<>Cargando</>} >
        <BrowserRouter basename="/dashboard">
          <AdminProvider>
            <CheckAccess>
              <SportsProvider>
                <CourtProvider>
                  <CourtHourProvider>
                    <ActivitiesProvider>
                    <div className="flex w-full">
                      <Navbar />
                      <Header />
                      <div className="flex-grow py-10 mt-5 ml-40">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/sports" element={<SportsMain />} />
                          <Route path="/courts-hours" element={<CourtHourMain />} />
                          <Route path="/activities" element={<ActivityMain />} />
                          <Route path="*" element={<div>404</div>} />
                        </Routes>
                      </div>
                    </div>
                    </ActivitiesProvider>
                  </CourtHourProvider>
                </CourtProvider>
              </SportsProvider>
            </CheckAccess>
          </AdminProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;