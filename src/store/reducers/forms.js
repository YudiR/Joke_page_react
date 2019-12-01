const initialState = {
  playerOneName: 'Player One',
  playerTwoName: 'Player Two',
  jokes: [],
  namesSubmitted: false,
  isOnePlayer: false
};


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
