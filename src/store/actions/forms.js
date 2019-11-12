export const playersNames = (nameOne, nameTwo) => {
  return {
    type: "PLAYERS_NAMES",
    playerOneName: nameOne,
    playerTwoName: nameTwo
  };
};

export const onePlayer = (player) => {
    return {
      type: "ONE_PLAYER",
      player: player
    };
  };
