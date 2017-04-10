import React from 'react';
import ReactTooltip from 'react-tooltip';

import SelectPlayersList from './SelectPlayersList';
import './SelectPlayersLists.css';

const SelectPlayersLists = (props) => (
  <div
    className="trade-machine-body-select-players_team"
  >
    <h1>
      {props.teamName}
    </h1>
    <div>
      <h2
        className="trade-machine-body-select-players_list-label"
      >
        Available Players
      </h2>
      <SelectPlayersList
        players={props.availablePlayers}
        playerAction={(team, player) => props.addPlayerToTrade(team, player)}
        sortFunction={(property) => props.sortPlayers(property, props.team, 'Available')}
        team={props.team}
        actionType="add"
      />
    </div>

      <p>
        {props.errorMessage && props.tradePlayers.length === 0 ?
          props.errorMessage
          :
          null
        }
      </p>

    <div>
      <h2
        className="trade-machine-body-select-players_list-label"
      >
        {props.teamName} will send the following players:
      </h2>

      <SelectPlayersList
        players={props.tradePlayers}
        playerAction={(team, player) => props.removePlayerFromTrade(team, player)}
        sortFunction={(property) => props.sortPlayers(property, props.team, 'Trade')}
        team={props.team}
        actionType="remove"
      />

      <p
        className="trade-machine-body-select-players_total-salary"
      >
        Total Salary: <b>${props.totalSalary.toFixed(2)}mm</b>
      </p>
    </div>
    <ReactTooltip />
  </div>
);

export default SelectPlayersLists;
