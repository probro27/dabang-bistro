import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Viewer from './components/Viewer';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Viewer />
      <AboutSection />
    </div>
  );
}

export default App;
