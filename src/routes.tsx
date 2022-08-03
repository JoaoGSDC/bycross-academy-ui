import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Course from './pages/Course';
import Authentication from './pages/Authentication';

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
