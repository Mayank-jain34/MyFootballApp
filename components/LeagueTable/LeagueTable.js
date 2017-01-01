import React from 'react';
import leageData from "../../__mock_data__/leagueTable";
import {browserHistory} from 'react-router';
require('./LeagueTable.scss');
class LeagueTable extends React.Component {
  goToTeamDetail(id) {
    browserHistory.push(`team/${id}`);
  }
  render() {
    console.error(leageData);
    return (
      <div className="league-table">
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
            {leageData.standing.map((
              row
            )=> {
              return (<tr key={row.position}>
                <td>{row.position}</td>
                <td onClick={()=> this.goToTeamDetail(1)}>{row.teamName}</td>
                <td>{row.playedGames}</td>
                <td>{row.wins}</td>
                <td>{row.draws}</td>
                <td>{row.losses}</td>
                <td>{row.goals}</td>
                <td>{row.goalsAgainst}</td>
                <td>{row.goalDifference}</td>
                <td>{row.points}</td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeagueTable;
