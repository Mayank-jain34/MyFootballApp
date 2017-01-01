import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import Home from './components/Home/Home';
import LeagueTable from './components/LeagueTable/LeagueTable';
import TeamDetails from './components/TeamDetails/TeamDetails';
import PlayersList from './components/LeagueTable/LeagueTable';
import PlayerDetails from './components/LeagueTable/LeagueTable';
require('./index.scss');
//let store = createStore();
//store={store}
render(
  	<Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="leagetable/:id" component={LeagueTable}/>
    <Route path="team/:teamId" component={TeamDetails}/>
    <Route path="players/:teamId" component={LeagueTable}/>
    <Route path="player/:playerId" component={LeagueTable} />
  </Router>,
  document.getElementById('root')
)
