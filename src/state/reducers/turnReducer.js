function turnReducer(state = "X", action) {
  switch (action.type) {
    case "turn/x":
      return "X";

    case "turn/o":
      return "O";

    case "turn/erase":
      return "X";

    default:
      return state;
  }
}

export default turnReducer;
