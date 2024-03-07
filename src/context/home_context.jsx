import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/home_reducer";
import {
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_ERROR,
  GET_HOME_DATA_SUCCESS,
} from "../action";
import { home_url } from "../utils/constants";
import axios from "axios";

const initialState = {
  home_loading: false,
  home_error: false,
  homeData: [],
  homeCategory: [],
  homeProducts: [],
};

const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch all product api
  const fetchProducts = async () => {
    // console.log("home data");
    dispatch({ type: GET_HOME_DATA_BEGIN });
    try {
      const response = await axios.get(home_url, {
        headers: {
          Accept: "application/x.mm.v1+json",
        },
      });
      const homeData = response.data;
      console.log("resss log", homeData);
      dispatch({ type: GET_HOME_DATA_SUCCESS, payload: homeData });
    } catch (error) {
      dispatch({ type: GET_HOME_DATA_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <HomeContext.Provider value={{ ...state }}>{children}</HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
