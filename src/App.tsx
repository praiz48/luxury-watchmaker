import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Heritage from './pages/Heritage';
import Contact from './pages/Contact';
import PrivateViewing from './pages/PrivateViewing';
import Craftsmanship from './pages/Craftsmanship';
import About from './pages/About';
import Bespoke from './pages/Bespoke';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-soft-ivory">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/private-viewing" element={<PrivateViewing />} />
              <Route path="/craftsmanship" element={<Craftsmanship />} />
              <Route path="/about" element={<About />} />
              <Route path="/bespoke" element={<Bespoke />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;