const initialState = {
  playerOneName: 'Player Two',
  playerTwoName: 'Player One',
  jokes: [],
  namesSubmitted: false,
  isOnePlayer: false
};

// {title: null,isOneLiner: false, oneLiner: null, question }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_JOKE_FORM":
      return { ...state, 
        jokes: state.jokes.concat(action.joke)
      };
    case "PLAYERS_NAMES":
      return { ...state,
      playerOneName:action.playerOneName,
    playerTwoName: action.playerTwoName,
    namesSubmitted: true 
     };
    case "ONE_PLAYER":
      return { ...state, isOnePlayer: action.player };
    case "FETCH_INGREDIENTS_FAILED":
      return { ...state };
    default:
      return state;
  }
};



export default reducer;
