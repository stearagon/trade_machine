import React from 'react';

const SelectPlayersList = (props) => {
  let button;

  if (!props.actionType) {
    button = null;
  } else if (props.actionType === 'add') {
    button = "+";
  } else if (props.actionType === 'remove') {
    button = "-";
  }

  return (
    <div>
      <div
        className="trade-machine-body-select-players_list-item group
          trade-machine-body-select-players_list-item--header"
      >
        <span
          onClick={() => props.sortFunction('name')}
        >
          Name
          <i className="fa fa-sort" aria-hidden="true"></i>
        </span>
        <span
          data-tip="Position"
          onClick={() => props.sortFunction('position')}
        >
          Pos
          <i className="fa fa-sort" aria-hidden="true"></i>
        </span>
        <span
          data-tip="Salary in Millions"
          onClick={() => props.sortFunction('salary')}
        >
          Salary (mm)
          <i className="fa fa-sort" aria-hidden="true"></i>
        </span>
        <span
          onClick={() => props.sortFunction('years')}
        >
          Contract
          <i className="fa fa-sort" aria-hidden="true"></i>
        </span>
      </div>
      <ul
        className={props.actionType === 'add' ?
          "trade-machine-body-select-players_list"
          :
          "trade-machine-body-select-players_trade-list"
        }
      >
        {props.players.map((player, index) => {
          return (
            <li
              className={props.actionType === 'add' ?
                "trade-machine-body-select-players_list-item group"
                :
                "trade-machine-body-select-players_trade-list-item group"
              }
              key={`${player.name}${player.salary}`}
            >
              <span data-tip={player.name}>{player.name}</span>
              <span>{player.position}</span>
              <span>
                ${player.salary.toFixed(2)}/yr
              </span>
              <span>
                {player.years} years
              </span>

              {!props.actionType ?
                null
                :
                <button
                  onClick={() => props.playerAction(props.team, player)}
                >
                  {button}
                </button>
              }
            </li>
          );
        })}

        {props.players.length === 0 ?
          <li
            className="trade-machine-body-select-players_notice"
          >
            No Players in List
          </li>
          :
          null
        }
      </ul>
    </div>
  );
};

export default SelectPlayersList;
