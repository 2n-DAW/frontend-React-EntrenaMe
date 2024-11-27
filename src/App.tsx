import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>} >
        <BrowserRouter>
            <Routes>
              <>
                <Route path="/" element={<Home />} />
              </>
            </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;