import React from 'react';

import SelectTeamContainer from './SelectTeamContainer';

import './SelectTeams.css';

const SelectTeams = (props) => (
    <div className="trade-machine-body-select-teams">
      <h1>
        Choose Your Teams
      </h1>

      <div
        className="trade-machine-body-select-teams_inputs"
      >
        <SelectTeamContainer
          label="Team 1"
          team="team1"
        />

        <SelectTeamContainer
          label="Team 2"
          team="team2"
        />

        {props.errorMessage ?
          <p>
            {props.errorMessage}
          </p>
          :
          null
        }
      </div>
    </div>
)

export default SelectTeams;
