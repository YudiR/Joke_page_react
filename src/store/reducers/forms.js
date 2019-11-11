const initialState = {
  playerOneName: 'Player Two',
  playerTwoName: 'Player One',
  jokes: [],
  linkFromForm: false
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
    playerTwoName: action.playerTwoName };
    case "LINK_FROM_FORM":
      return { ...state, linkFromForm: true };
    case "FETCH_INGREDIENTS_FAILED":
      return { ...state };
    default:
      return state;
  }
};



export default reducer;
