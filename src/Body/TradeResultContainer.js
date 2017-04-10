import { connect } from 'react-redux';

import TradeResultComponent from './TradeResult';

import {
  goToTab,
  sortPlayers,
} from '../TradeMachineActions';

const mapStateToProps = (state) => {
  const team1TotalSalary = state.team1TradePlayers.reduce((acc, player) => {
    return acc + player.salary;
  }, 0)

  const team2TotalSalary = state.team2TradePlayers.reduce((acc, player) => {
    return acc + player.salary;
  }, 0)

  return {
    tradeSuccessful: state.tradeSuccessful,
    team1TradePlayers: state.team1TradePlayers,
    team2TradePlayers: state.team2TradePlayers,
    team1TotalSalary: team1TotalSalary,
    team2TotalSalary: team2TotalSalary,
    team1: state.team1,
    team2: state.team2,
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    goToTab: (tab) => {
      dispatch(goToTab(tab));
    },
    sortPlayers: (property, team, listType) => {
      dispatch(sortPlayers(property, team, listType));
    },
  }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TradeResultComponent);
