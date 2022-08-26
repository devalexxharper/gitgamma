import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import Repos from './pages/repos';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/repositories' element={<Repos />} />
      </Routes>
    </BrowserRouter>
  )
}

