import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (

    <Router>
    <div className="App">
      <header className="App-header">
        <p>
          conal.tech <span role="img" aria-label="space invader">👾</span>
        </p>
      </header>
      <Switch>
          <Route path='/articles/*'>
            <Article/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
