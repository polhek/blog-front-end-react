const defaultState = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        loggedIn: true,
        user: { ...action.payload },
      };
    case 'LOG_OUT':
      localStorage.clear();
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
