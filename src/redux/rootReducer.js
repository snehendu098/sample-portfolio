const initialState = { darkMode: false };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default rootReducer;
