const initialState = {
    playerOneWins: 0,
    playerTwoWins: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "PLAYER_ONE_WINS":
            return {
                ...state,
                playerOneWins: state.playerOneWins + 1
            }
            case "PLAYER_TWO_WINS":
                    return {
                        ...state,
                        playerTwoWins: state.playerTwoWins + 1
                    }
            default:
                    return state
    }
}

export default reducer