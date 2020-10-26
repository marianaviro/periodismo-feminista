import '../css/global.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import Credits from './Credits';
import Footer from './Footer';
import Navbar from './Navbar';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/creditos" component={Credits} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
