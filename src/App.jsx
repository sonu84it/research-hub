import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

// Determine the base path when the app is served from a subfolder (e.g. GitHub Pages)
const basename = process.env.PUBLIC_URL
  ? new URL(process.env.PUBLIC_URL, window.location.origin).pathname
  : '/';

export default function App() {
  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
