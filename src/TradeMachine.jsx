import React from 'react';
import './TradeMachine.css';
import SelectTeams from './Body/SelectTeams';
import SelectPlayers from './Body/SelectPlayers';
import TradeResultContainer from './Body/TradeResultContainer';

import 'react-select/dist/react-select.css';

const TradeMachine = (props) => {
  let content;

  switch (props.activeTab) {
    case 'teams':
      content = (
        <SelectTeams
          errorMessage={props.errorMessage}
        />
      );
      break;
    case 'players':
      content = (
        <SelectPlayers />
      );
      break;
    case 'result':
      content = <TradeResultContainer />;
      break;
    default:
      content = null;
  }

  return (
    <div className="trade-machine">
      <div className="trade-machine-header group">
        <a href="/" className="trade-machine-header_title">
          The Trade Machine
        </a>
        {props.activeTab !== 'teams' ?
          <button
            onClick={() => props.resetTradeMachine()}
          >
            Restart
          </button>
          :
          null
        }
      </div>

      <div className="trade-machine-controls">
        {props.priorTab ?
          <a
            onClick={() => props.goToTab(props.priorTab)}
            className="trade-machine-controls_left"
          >
            &lt;&lt; {props.priorTabLabel}
          </a>
          :
          null
        }

        {props.nextTab ?
          <a
            onClick={() => props.goToTab(props.nextTab)}
            className="trade-machine-controls_right"
          >
            {props.nextTabLabel} &gt;&gt;
          </a>
          :
          null
        }
      </div>

      <div className="trade-machine-body">
        {content}
      </div>
    </div>
  );
};

export default TradeMachine;
