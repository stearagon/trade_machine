import { connect } from 'react-redux';

import SelectPlayersListsComponent from './SelectPlayersLists';
import {
  addPlayerToTrade,
  removePlayerFromTrade,
  sortPlayers,
} from '../TradeMachineActions';

const mapStateToProps = (state, ownProps) => {
  const team = ownProps.team;
  const teamName = state[team].value
  const tradePartner = team === 'team1' ? state['team2'] : state['team1'];
  const tradePartnerName = tradePartner.value;
  const availablePlayers = state[`${team}AvailablePlayers`];
  const tradePlayers = state[`${team}TradePlayers`];
  const totalSalary = tradePlayers.reduce((acc, player) => {
    return acc + player.salary;
  }, 0)

  return {
    availablePlayers,
    tradePlayers,
    teamName,
    tradePartnerName,
    team,
    totalSalary,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    addPlayerToTrade: (team, player) => {
      dispatch(addPlayerToTrade(team, player));
    },
    removePlayerFromTrade: (team, player) => {
      dispatch(removePlayerFromTrade(team, player));
    },
    sortPlayers: (property, team, listType) => {
      dispatch(sortPlayers(property, team, listType));
    },
  }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectPlayersListsComponent);
