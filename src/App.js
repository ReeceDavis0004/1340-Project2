import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
