import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import ShortFilmListing from "./components/ShortFilmListing";
import FeatureFilmListing from "./components/FeatureFilmListing";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";
import { scrollToSmoothly } from "./common/handlers";
import Icon from '@material-ui/core/Icon';
import './index.css';

let buttonId = "";

const myScrollFunc = () => {
  const y = window.scrollY;
  if (y >= 300) {
    buttonId.className = "show"
  } else {
    buttonId.className = "hide"
  }
};

const scollTop = () => {
  scrollToSmoothly(0, 0);
};

const Root = () => {
  useEffect(() => {
    buttonId = document.getElementById("button");
    window.addEventListener("scroll", myScrollFunc);
    document.getElementById("arrowIcon").addEventListener("click", scollTop);
  }, []);

  return (
    <Router>
      <div onClick={myScrollFunc} id="button" className="aaaaaaaaaaaaa">
        <Icon id="arrowIcon">arrow_upward</Icon>
      </div>
      <ToolBar />
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path='/notfound' render={() => <NotFound />} />
        <Route exact path='/shortfilms' render={() => <ShortFilmListing />} />
        <Route exact path='/featurefilms' render={() => <FeatureFilmListing />} />
        <Route exact path="*" render={() => <NotFound />} />
      </Switch>
      <Footer />
    </Router>
  );
}



ReactDOM.render(<Root />, document.getElementById('root'));