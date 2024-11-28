import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Header = React.lazy(() => import('./components/layout/Header'));
const Footer = React.lazy(() => import('./components/layout/Footer'));

function App() {

  return (
    <div className="bg-background1 text-text1 flex flex-col min-h-screen">
      <Suspense fallback={<>Cargando</>} >
        <BrowserRouter>
          <Header />
          <div className="w-full mx-auto flex-grow py-10">
            <Routes>
              <>
                <Route path="/" element={<Home />} />
              </>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;