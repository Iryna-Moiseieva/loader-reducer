const initialState = {
  loader: {
    status: false,
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loader/setIsLoading":
      return {
        loader: {
          status: action.payload
        }
      };
    default:
      return state;
  }
};