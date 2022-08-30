import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AirportDitailPage } from './pages/AirportDitailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';

// import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='/airport/:id' element={<AirportDitailPage />}/>
      </Routes>
    </>
  );
}

export default App;
