import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <ThemeSwitcher />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;