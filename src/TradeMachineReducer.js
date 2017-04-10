import * as types from './TradeMachineActions';
import {
  allPlayers,
  calculateContractsValue,
  teams,
  tabs,
} from './utils';

const initialState = {
  team1: null,
  team2: null,
  team1AvailablePlayers: [],
  team2AvailablePlayers: [],
  team1TradePlayers: [],
  team2TradePlayers: [],
  team1AvailablePlayersSortProperty: 'salary',
  team2AvailablePlayersSortProperty: 'salary',
  team1TradePlayersSortProperty: 'salary',
  team2TradePlayersSortProperty: 'salary',
  priorTab: null,
  activeTab: 'teams',
  nextTab: 'players',
  nextTabLabel: tabs['players'].label,
  nextTabReady: false,
  priorTabLabel: null,
  teams: teams,
  allPlayers: allPlayers,
  tradeSuccessful: false,
  errorMessage: null,
};

const tradeMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEAM:
      let availableTeams = state.teams;

      if (state[action.teamName]) {
        availableTeams.push(state[action.teamName]);
      }

      availableTeams = availableTeams.filter((team) => {
        return team !== action.team;
      }).sort((a,b) => a.value.localeCompare(b.value));

      const stateChanges = {
        ...state,
        teams: availableTeams,
      };

      stateChanges[action.teamName] = action.team;
      stateChanges[`${action.teamName}AvailablePlayers`] = action.team ? state.allPlayers[action.team.value] : [];
      stateChanges[`${action.teamName}TradePlayers`] = [];
      stateChanges[`${action.teamName}AvailablePlayersSortProperty`] = 'salary';
      stateChanges[`${action.teamName}TradePlayersSortProperty`] = 'salary';

      return stateChanges;
    case types.CHECK_IF_NEXT_TAB_READY: {
      let nextTabReady;
      let errorMessage = null;

      if (state.nextTab === 'players' || action.tab === 'teams') {
        nextTabReady = !!state.team1 && !!state.team2;

        if (!nextTabReady) {
          errorMessage = "Please select two teams";
        }
      } else if (state.nextTab === 'result' || action.tab === 'players') {
        nextTabReady = state.team1TradePlayers.length > 0 &&
          state.team2TradePlayers.length > 0;

        if (!nextTabReady) {
          errorMessage = "Please select at least one player from this team";
        }
      }

      return {
        ...state,
        nextTabReady,
        errorMessage,
      };
    }
    case types.CHANGE_ACTIVE_TAB: {
      const tabNames = Object.keys(tabs);
      const tabsIndex = tabNames.indexOf(action.tab);
      const priorTab = tabNames[tabsIndex - 1] || null;
      const nextTab = tabNames[tabsIndex + 1] || null;
      const priorTabLabel = tabs[priorTab] ? tabs[priorTab].label : null;
      const nextTabLabel= tabs[nextTab] ? tabs[nextTab].label : null;

      return {
        ...state,
        activeTab: action.tab,
        priorTab,
        nextTab,
        priorTabLabel: priorTabLabel,
        nextTabLabel: nextTabLabel,
      };
    }
    case types.ADD_PLAYER_TO_TRADE: {
      const stateChanges = {};
      const availablePlayers = state[`${action.team}AvailablePlayers`];
      const tradePlayers = state[`${action.team}TradePlayers`];

      const newAvailablePlayers = availablePlayers.filter((player) => {
        return player.name !== action.player.name;
      });
      stateChanges[`${action.team}AvailablePlayers`] = newAvailablePlayers;

      const newTradePlayers = tradePlayers;
      newTradePlayers.push(action.player);
      stateChanges[`${action.team}TradePlayers`] = newTradePlayers;

      return {
        ...state,
        ...stateChanges,
      };
    }
    case types.REMOVE_PLAYER_FROM_TRADE: {
      const stateChanges = {};
      const availablePlayers = state[`${action.team}AvailablePlayers`];
      const tradePlayers = state[`${action.team}TradePlayers`];

      const newTradePlayers = tradePlayers.filter((player) => {
        return player.name !== action.player.name;
      });
      stateChanges[`${action.team}TradePlayers`] = newTradePlayers;

      const newAvailablePlayers = availablePlayers;
      newAvailablePlayers.push(action.player);
      stateChanges[`${action.team}AvailablePlayers`] = newAvailablePlayers;

      return {
        ...state,
        ...stateChanges,
      };
    }
    case types.RESET_TRADE_MACHINE:
      return {
        ...initialState,
      };
    case types.ATTEMPT_TRADE: {
      const team1ContractsValue = calculateContractsValue(state.team1TradePlayers)
      const team2ContractsValue = calculateContractsValue(state.team2TradePlayers)
      const minValue = Math.min(team1ContractsValue, team2ContractsValue);
      const maxValue = Math.max(team1ContractsValue, team2ContractsValue);
      const tradeSuccessful = 1.5 * minValue >= maxValue;

      return {
        ...state,
        tradeSuccessful,
      };
    }
    case types.SORT_PLAYERS: {
      const stateChanges = {};
      const playerListName = `${action.team}${action.listType}Players`;
      const players = state[playerListName].slice(0);
      const property = action.property;
      const sortProperty = state[`${playerListName}SortProperty`];

      stateChanges[`${playerListName}SortProperty`] = action.property;

      if (action.property === sortProperty) {
        stateChanges[playerListName] = players.reverse()
      } else if (['name', 'position'].indexOf(action.property) >= 0) {
        stateChanges[playerListName] = players.sort((a,b) => (
          a[property].localeCompare(b[property])
        ));
      } else {
        stateChanges[playerListName] = players.sort((a,b) => (
          a[property] - b[property]
        ));
      }

      return {
        ...state,
        ...stateChanges,
      };
    }
    default:
      return state;
  }
};

export default tradeMachineReducer;
