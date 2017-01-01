import React from 'react';
import { browserHistory } from 'react-router';

require("./Home.scss");

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
          <div className="tile epl" onClick={()=>this.goToLeagueTable(1)}></div>
          <div className="tile laliga" onClick={()=>this.goToLeagueTable(2)}></div>
          <div className="tile bundesliga" onClick={()=>this.goToLeagueTable(3)}></div>
          <div className="tile seriaA" onClick={()=>this.goToLeagueTable(4)}></div>
          <div className="tile ligue1" onClick={()=>this.goToLeagueTable(5)}></div>
          <div className="tile see-all" onClick={()=>this.goToLeagueTable(6)}>More >></div>
      </div>
    );
  }
  goToLeagueTable(id) {
    browserHistory.push(`/leagetable/${id}`)
  }
}

export default Home;
