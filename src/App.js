import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './composant/header/header'
import Footer from './composant/footer/footer'
import Profil from './pages/profil/profil';

function App() {
  return (
    <div className="App">
        <Header />  
          <Router>
              <Routes>
                 {<Route path="/profil" element={<Profil />} />} 
              </Routes>
          </Router>
    </div>
  );
}

export default App;
