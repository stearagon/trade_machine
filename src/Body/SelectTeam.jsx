import React from 'react';
import SelectInput from 'react-select';

import './SelectTeam.css';
import 'react-select/dist/react-select.css';

const SelectTeam = (props) => (
  <div
      className="trade-machine-body-select-teams_input"
  >
    <h1>
      {props.label}
    </h1>
    <SelectInput
      placeholder={`Select ${props.label}`}
      options={props.teams}
      value={props.teamName}
      onChange={(option) => props.updateTeam(props.team, option)}
    />
  </div>
)

export default SelectTeam;

