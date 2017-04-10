import React from 'react';

import SelectPlayersListsContainer from './SelectPlayersListsContainer';

import './SelectPlayers.css';

const SelectPlayers = (props) => (
    <div className="trade-machine-body-select-players">
      <h1>
        Select Players
      </h1>

      <div
        className="trade-machine-body-select-players_teams"
      >
        <SelectPlayersListsContainer
          team="team1"
        />

        <SelectPlayersListsContainer
          team="team2"
        />
      </div>

      {props.errorMessage ?
        <p>
          {props.errorMessage}
        </p>
        :
        null
      }
    </div>
)

export default SelectPlayers;
