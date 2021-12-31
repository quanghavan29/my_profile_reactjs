import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} lg={3} md={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />

            <div className="main_content">
              <Switch>
                <Route path='/my-projects'>
                  <Project />
                </Route>
                <Route path='/about-me'>
                  <AboutMe />
                </Route>
                <Route path='/contact'>
                  <Contact />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>

          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
