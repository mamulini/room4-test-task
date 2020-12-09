import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.page';
import Artistpage from './pages/artistpage/artistpage.page';
import Searchpage from './pages/searchpage/searchpage.page';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/search" component={Searchpage} />
      <Route path="/artist" component={Artistpage} />
    </Switch>
  </div>
);

export default App;
