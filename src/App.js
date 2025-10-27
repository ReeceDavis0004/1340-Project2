import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import feather from 'feather-icons';
import React, { useState, useEffect, useCallback } from 'react';


function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    feather.replace();
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
