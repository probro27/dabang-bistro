import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Viewer from './components/Viewer';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Viewer />
      <AboutSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
