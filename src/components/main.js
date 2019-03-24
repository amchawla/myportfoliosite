import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from  './landingpage';
import AboutMe from './aboutme';
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/myportfoliosite" component={LandingPage} />
    <Route path="/myportfoliosite/aboutme" component={AboutMe} />
    <Route exact path="/myportfoliosite/projects" component={Projects} />
    <Route exact path="/myportfoliosite/resume" component={Resume} />
    <Route exact path="/myportfoliosite/contact" component={Contact} />
  </Switch>
);

export default Main;