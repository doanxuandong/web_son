import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import Ranking from './pages/Ranking';
import Inside from './pages/Inside';
import News from './pages/News';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/inside" element={<Inside />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
