import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Specials from './components/Specials';
import Catering from './components/Catering';
import GalleryPage from './components/GalleryPage';
import Loyalty from './components/Loyalty';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/special">
            <Specials />
          </Route>
          <Route path="/catering">
            <Catering />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/loyalty">
            <Loyalty />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
