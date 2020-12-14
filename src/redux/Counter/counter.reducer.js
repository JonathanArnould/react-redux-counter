import {
  INCREMENT,
  DECREMENT,
  ADD_TEN,
  REMOVE_TEN,
  RESET,
} from "./counter.types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ADD_TEN:
      return {
        ...state,
        count: state.count + 10,
      };

    case REMOVE_TEN:
      return {
        ...state,
        count: state.count - 10,
      };

    case RESET:
      return {
        ...state,
        count: state.count - state.count,
      };
    default:
      return state;
  }
};

export default reducer;
