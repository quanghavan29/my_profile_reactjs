import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

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
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/'>
                <Resume />
              </Route>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
