import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link } from 'react-router-dom';
class App extends Component {
  render() {
    return <div className="demo-big-content">
        <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: "none", color: "white" }} to="/myportfoliosite">
                Amit Chawla
              </Link>} scroll>
            <Navigation>
              <Link to="/myportfoliosite/aboutme">About Me</Link>
            <Link to="/myportfoliosite/projects">Projects</Link>
            <Link to="/myportfoliosite/resume">Resume</Link>
            <Link to="/myportfoliosite/contact">Contact</Link>
            </Navigation>
          </Header>
        <Drawer title={<Link style={{ textDecoration: "none", color: "black" }} to="/myportfoliosite">
                Amit Chawla
              </Link>} scroll>
            <Navigation>
            <a href="/myportfoliosite/aboutme">About Me</a>
            <a href="/myportfoliosite/projects">Projects</a>
            <a href="/myportfoliosite/resume">Resume</a>
            <a href="/myportfoliosite/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>;
  }
}

export default App;
