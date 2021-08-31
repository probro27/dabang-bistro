import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Specials from './components/Specials';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/special">
            <Specials />
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
