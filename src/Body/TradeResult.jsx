import React from 'react';

import SelectPlayersList from './SelectPlayersList';
import './TradeResult.css';

const TradeResult = (props) => (
    <div className="trade-machine-body-result">
      <h1
        style={{ color: props.tradeSuccessful ? "#006600" : "#b20000" }}
      >
        Trade
        {props.tradeSuccessful ?
          ' Successful'
          :
          ' Failed'
        }

        {!props.tradeSuccessful ?
          <p>
            Combined Salaries for each team's playerswere not within 150% or each other
        </p>
          :
          null
        }
      </h1>

      <div
        className="trade-machine-body-result_players"
      >
        <div>
          <h1>
            {props.team1.value} trade away:
          </h1>

          <SelectPlayersList
            players={props.team1TradePlayers}
            sortFunction={(property) => props.sortPlayers(property, 'team1', 'Trade')}
            team="team1"
          />

          <p
            className="trade-machine-body-select-players_total-salary"
          >
            Total Salary: <b>${props.team1TotalSalary.toFixed(2)}mm</b>
          </p>
        </div>

        <div>
          <h1>
            {props.team2.value} trade away
          </h1>

          <SelectPlayersList
            players={props.team2TradePlayers}
            sortFunction={(property) => props.sortPlayers(property, 'team2', 'Trade')}

            team="team2"
          />

          <p
            className="trade-machine-body-select-players_total-salary"
          >
            Total Salary: <b>${props.team2TotalSalary.toFixed(2)}mm</b>
          </p>
        </div>

      </div>

      <div
        className="trade-machine-body-result_actions"
      >
        <button
          onClick={() => props.goToTab('players')}
        >
          Change Players
        </button>

        <button
          onClick={() => props.goToTab('teams')}
        >
          Change Teams
        </button>
      </div>
    </div>
)

export default TradeResult;
