import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const About = () => <h2>Halaman About</h2>;
  const Home = () => <h2>Halaman Home</h2>;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
