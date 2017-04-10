import { connect } from 'react-redux';

import TradeMachineComponent from './TradeMachine';
import {
  attemptTrade,
  goToTab,
  resetTradeMachine
} from './TradeMachineActions';

const mapStateToProps = (state) => (
  {
    activeTab: state.activeTab,
    nextTab: state.nextTab,
    nextTabLabel: state.nextTabLabel,
    nextTabReady: state.nextTabReady,
    priorTab: state.priorTab,
    priorTabLabel: state.priorTabLabel,
    teams: state.teams,
    team1: state.team1,
    team2: state.team2,
    errorMessage: state.errorMessage,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    goToTab: (tab) => {
      dispatch(goToTab(tab));
    },
    resetTradeMachine: () => {
      dispatch(resetTradeMachine());
    },
    attemptTrade: () => {
      dispatch(attemptTrade());
    },
  }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TradeMachineComponent);
