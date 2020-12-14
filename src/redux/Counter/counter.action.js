import {
  INCREMENT,
  DECREMENT,
  ADD_TEN,
  REMOVE_TEN,
  RESET,
} from "./counter.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const increaseByTenCounter = () => {
  return {
    type: ADD_TEN,
  };
};

export const decreaseByTenCounter = () => {
  return {
    type: REMOVE_TEN,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
