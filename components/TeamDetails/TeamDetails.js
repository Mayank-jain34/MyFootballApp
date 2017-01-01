import React from 'react';
import playersData from "../../__mock_data__/player";
import teamData from "../../__mock_data__/team";

require("./TeamDetails.scss");
class TeamDetails extends React.Component{
  render() {
    let customStyle = {
      'background' : `url(${teamData.crestUrl})`,
      'backgroundSize' : 'cover'
    };
    return (
      <div className="team-details-container">
        <div className="team-details">
          <div className="team-logo" style={customStyle}></div>
          <div className="team-name">
          {teamData.name}
          </div>
        </div>
        <div className="players-list">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Jersey Number</th>
                <th>Date Of Birth</th>
                <th>Nationality</th>
                <th>Contract Until</th>
                <th>Market Value</th>
              </tr>
              {playersData.players.map((player)=>{
                return (
                  <tr key={player.jerseyNumber}>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.dateOfBirth}</td>
                    <td>{player.nationality}</td>
                    <td>{player.contractUntil}</td>
                    <td>{player.marketValue}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TeamDetails;
