import { ACTION } from "./Action";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case ACTION.RESET_SEARCH_TERM:
      return { ...state, searchTerm: "" };
    default:
      alert("Something went wrong! Not in action");
      return state;
  }
};

export default reducer;
