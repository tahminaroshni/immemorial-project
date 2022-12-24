import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import FavouritesBlog from './components/FavouritesBlog';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/favourites-blog' element={<FavouritesBlog needFullHeight={true} />} />
        <Route path='*' element={<NotFound needFullHeight={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
