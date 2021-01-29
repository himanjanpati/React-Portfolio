import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import { Container, Grid } from "@material-ui/core";
import "./index.css";
import "./App.css";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/resume">
                <div className="app__main-content">
                <Resume/>
                </div>
              </Route>
              <Route path="/">
              <div className="app__main-content">
                <About />
                </div>
              </Route>
              <Route path="/Blog">
                <Blog />
              </Route>
            </Switch>
          </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
