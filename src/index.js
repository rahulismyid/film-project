import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import ShortFilmListing from "./components/ShortFilmListing";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";

import './index.css';


const Root = () => (
  <Router>
    <ToolBar />
    <Switch>
      <Route exact path="/" render={() => <App />} />
      <Route exact path="/contact" render={() => <Contact />} />
      <Route exact path='/notfound' render={() => <NotFound />} />
      <Route exact path='/shortfilms' render={() => <ShortFilmListing />} />
      <Route exact path="*" render={() => <NotFound />} />
    </Switch>
    <Footer />
  </Router>
);



ReactDOM.render(<Root />, document.getElementById('root'));