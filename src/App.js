import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="about-container">
        <About />
      </div>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
