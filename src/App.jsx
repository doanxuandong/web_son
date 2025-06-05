import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import Ranking from './pages/Ranking';
import Inside from './pages/Inside';
import News from './pages/News';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import VatTuPage from './pages/VatTuPage';
import VatTuCategoryPage from './pages/VatTuCategoryPage';

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
          <Route path="/san-pham" element={<ProductPage />} />
          <Route path="/san-pham/:category/:subcategory" element={<ProductCategoryPage />} />
          <Route path="/vat-tu" element={<VatTuPage />} />
          <Route path="/vat-tu/:category/:subcategory" element={<VatTuCategoryPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
