import '../scss/App.scss';

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import NameList from './NameList';
import NameBox from './NameBox';
import Profile from './Profile';
import NotFound from './NotFound';

export default() => (
  <div className="app">
    <BrowserRouter>
      <Route path="/" component={Header}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/names/girls" exact component={NameList}/>
        <Route path="/names/boys" exact component={NameList}/>
        <Route path="/names/new" exact component={NameBox}/>
        <Route path="/profile" exact component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </div>);

