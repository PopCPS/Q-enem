import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/home/index.tsx'
import { AboutSubject } from './pages/about-subject/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-size-screen p-6 flex flex-col items-center gap-8">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:subject' element={<AboutSubject />} />
        </Routes>
      </Router>
    </div>
  </StrictMode>
)
