const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function boardReducer(state = initialState, action) {
  switch (action.type) {
    case "board/moveX":
      const rowX = action.payload[0];
      const colX = action.payload[1];
      const newStateX = [...state];
      newStateX[rowX][colX] = "X";
      return newStateX;

    case "board/moveO":
      const rowO = action.payload[0];
      const colO = action.payload[1];
      const newStateO = [...state];
      newStateO[rowO][colO] = "O";
      return newStateO;

    case "board/erase":
      return [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];

    default:
      return state;
  }
}

export default boardReducer;
