import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {

  return (
    <Router>
      
      <Switch>
        <Route path="/productpage">
          <Header />
          <ProductPage />
        </Route>
        <Route path="/home">
          <Header />
          <HomePage />
        </Route>
        <Route path="/signin" component={Login} />
        <Route path="/" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
