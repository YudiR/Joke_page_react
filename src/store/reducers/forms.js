const initialState = {
  playerOneName: null,
  playerTwoName: null,
  jokes: []
};

// {title: null,isOneLiner: false, oneLiner: null, question }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_JOKE_FORM":
      return { ...state, 
        jokes: state.jokes.concat(action.joke)
      };
    case "REMOVE_INGREDIENT":
      return { ...state };
    case "SET_INGREDIENTS":
      return { ...state };
    case "FETCH_INGREDIENTS_FAILED":
      return { ...state };
    default:
      return state;
  }
};



export default reducer;
