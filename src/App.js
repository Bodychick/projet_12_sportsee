import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './composant/header/header'
import Footer from './composant/footer/footer'

function App() {
  return (
    <div className="App">
        <Header />  
          <Router>
              <Routes>
                 {/*<Route path="/*" element={<NotFound />} />*/} 
              </Routes>
          </Router>
        <Footer />
    </div>
  );
}

export default App;
