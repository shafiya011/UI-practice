//selector
export const submitUser = "Submit_User";
export const deleteUser = "Delete_User";
export const updateUser = "Update_user";

//action

export const getData = (details) => ({
  type: submitUser,
  payload: details,
});
export const deleteData = (index) => ({
  type: deleteUser,
  payload: index,
});
export const updateData = (index) => ({
  type: updateUser,
  payload: index,
});

const initialState = {
  details: [],
};

// Reducer
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case submitUser:
      return {
        ...state,
        details: [...state?.details, ...action?.payload],
      };
    case deleteUser:
      console.log("action", action);
      return {
        ...state,
        details: action?.payload,
      };
    case updateUser:
      return {
        ...state,
        details:action?.payload
      };
    default:
      return state;
  }
};
