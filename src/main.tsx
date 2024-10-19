import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/home/index.tsx'
import { AboutSubject } from './pages/about-subject/index.tsx';
import { Signup } from './pages/Signup/index.tsx';
import { SignIn } from './pages/Signin/index.tsx';
import { Questions } from './pages/question-page/index.tsx';
import { About } from './pages/about/index.tsx';
import { Profile } from './pages/profile/index.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:subject' element={<AboutSubject />} />
          <Route path='/questoes' element={<Questions />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
)
