import {
  Fetch_User_Failure,
  Fetch_User_Success,
  Fetch_User_Request,
} from "./UserAction";
// reducer
import React from "react";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const UserRecducer = (state = initialState, action) => {
  switch (action?.type) {
    case Fetch_User_Request:
      return {
        ...state,
        loading: true,
      };
    case Fetch_User_Success:
      console.log('data--action', action.payload)
      return {
        ...state,
        users: action.payload,
        loading: false,
        error:''
      };
    case Fetch_User_Failure:
      return {
        ...state,
        loading:false,
        users:[],
        error: action?.payload
      };

    default:
      return state
  }
};

export default UserRecducer;
