import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

// states
export const Fetch_User_Request = "Fetch_User_Response";
export const Fetch_User_Success = "Fetch_User_Success";
export const Fetch_User_Failure = "Fetch_User_Failure";

// const dispatch=useDispatch()

// actions

export const FetchRequest = () => {
  return {
    type: Fetch_User_Request,
  };
};
export const FetchSuccess = (Users) => {
  return {
    type: Fetch_User_Success,
    payload: Users,
  };
};
export const FetchFailure = (error) => {
  return {
    type: Fetch_User_Failure,
    payload: error,
  };
};


// thunk func

export const fetchUsers =  () => {
 
  return (dispatch) => {
    console.log('axios')
    dispatch(FetchRequest());

     axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res?.data;
        console.log('axios',res)
        dispatch(FetchSuccess(users));
      })
      .catch((err) => {
        console.log('axios',err)
        const errMsg = err.error;
        dispatch(FetchFailure(errMsg));
      });
  };
};
