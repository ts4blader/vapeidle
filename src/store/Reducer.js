import { ACTION } from "./Action";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case ACTION.RESET_SEARCH_TERM:
      return { ...state, searchTerm: "" };
    case ACTION.SET_NOTIFICATION_MESSAGE:
      return { ...state, notificationMessage: action.payload };
    case ACTION.RESET_NOTIFICATION_MESSAGE:
      return { ...state, notificationMessage: "" };
    default:
      alert("Something went wrong! Not in action");
      return state;
  }
};

export default reducer;
