import React from "react";
import {
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_ERROR,
  GET_HOME_DATA_SUCCESS,
} from "../action";

const home_reducer = (state, action) => {
  if (action.type === GET_HOME_DATA_BEGIN) {
    return { ...state, home_loading: true };
  }
  if (action.type === GET_HOME_DATA_SUCCESS) {
    return {
      ...state,
      home_loading: false,
      homeData: action.payload.records.slider,
      homeCategory: action.payload.records.category,
      homeProducts: action.payload.records.product,
    };
  }
  if (action.type === GET_HOME_DATA_ERROR) {
    return { ...state, home_loading: false, home_error: true };
  }
};

export default home_reducer;
