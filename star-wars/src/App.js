import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';
import StarshipsList from './components/StarshipsList';
import StarshipsPage from './components/StarshipPage';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Ship Page</h1>
      <Nav />
      <Outlet />
      <Routes >
        <Route path='/' element={<StarshipsList />} />
        <Route path='/starships/:index' element={<StarshipsPage />} />
      </Routes>
    </div>
  );
}

export default App;
