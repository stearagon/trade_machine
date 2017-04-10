export const UPDATE_TEAM = 'UPDATE_TEAM';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const ADD_PLAYER_TO_TRADE = 'ADD_PLAYER_TO_TRADE';
export const REMOVE_PLAYER_FROM_TRADE = 'REMOVE_PLAYER_FROM_TRADE';
export const RESET_TRADE_MACHINE = 'RESET_TRADE_MACHINE';
export const ATTEMPT_TRADE = 'ATTEMPT_TRADE';
export const GO_TO_TAB = 'GO_TO_TAB';
export const SORT_PLAYERS = 'SORT_PLAYERS';
export const CHECK_IF_NEXT_TAB_READY = 'CHECK_IF_NEXT_TAB_READY';

export const updateTeam = (teamName, team) => ({
    type: UPDATE_TEAM,
    teamName,
    team,
});

const changeActiveTab = (tab) => ({
    type: CHANGE_ACTIVE_TAB,
    tab,
});

export const addPlayerToTrade = (team, player) => ({
    type: ADD_PLAYER_TO_TRADE,
    team,
    player,
});

export const removePlayerFromTrade = (team, player) => ({
    type: REMOVE_PLAYER_FROM_TRADE,
    team,
    player,
});

export const resetTradeMachine = () => ({
    type: RESET_TRADE_MACHINE,
});

const attemptTrade = () => ({
    type: ATTEMPT_TRADE,
});

const checkIfNextTabReady = (tab) => ({
    type: CHECK_IF_NEXT_TAB_READY,
    tab,
});


export const goToTab = (tab) => (
    (dispatch, getState) => {
      dispatch(checkIfNextTabReady(tab));
      const state = getState();

      if((state.nextTab === tab && state.nextTabReady) ||
        state.priorTab === tab)
      {
        if (tab === 'result') {
          dispatch(attemptTrade());
        }

        dispatch(changeActiveTab(tab));
      }
    }
);

export const sortPlayers = (property, team, listType) => ({
    type: SORT_PLAYERS,
    property,
    team,
    listType,
});

