import React from 'react';
import './App.css';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/contact' component={Contact} />
        <Route path='/details' component={Details} />
        <Route path='/not-found-page' component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
