import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './componate/Navbar';
import About from './pages/About';
import Products from './pages/Products';
import CompanyInfo from './pages/CompanyInfo';
import News from './pages/News';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
return (
    <Router>
      <Navbar />
      <main style={{marginTop:"120px"}}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App
