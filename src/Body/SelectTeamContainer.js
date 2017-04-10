import { connect } from 'react-redux';

import SelectTeamComponent from './SelectTeam';
import { updateTeam } from '../TradeMachineActions';

const mapStateToProps = (state, ownProps) => {
  const team = ownProps.team;
  const teamName = state[team];

  return {
    teams: state.teams,
    teamName: teamName,
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    updateTeam: (team, option) => {
      dispatch(updateTeam(team, option));
    }
  }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectTeamComponent);
