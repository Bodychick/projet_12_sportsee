import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './composant/header/header';
import Profil from './pages/profil/profil';
import Reglages from './pages/réglages/reglages';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/profil" element={<Profil />} />
          <Route path="/reglages" element={<Reglages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
