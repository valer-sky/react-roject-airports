import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { useAppDispatch } from './hook/redux';
import { AirportDitailPage } from './pages/AirportDitailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';
import { fetchHandbooks } from './store/actions/handbookActions';

// import './App.css';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHandbooks())
  }, [dispatch])
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
