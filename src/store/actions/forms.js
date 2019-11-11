export const playersNames = (nameOne, nameTwo) => {
  return {
    type: "PLAYERS_NAMES",
    playerOneName: nameOne,
    playerTwoName: nameTwo
  };
};

export const linkFromForm = () => {
    return {
      type: "LINK_FROM_FORM",
    };
  };
