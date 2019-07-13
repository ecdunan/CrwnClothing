import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

import './App.css';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
    </div>
  );
}

export default App;