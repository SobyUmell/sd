const defaultState = {
  email: "",
  password: "",
  photo: "",
  info: {},
};
export const userReducer = (state = defaultState, action) => {
  // action = {type:'', email:''}
  // action = {type:'', password:''}
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    case "SET_INFO":
      return {
        ...state,
        info: action.info,
      };
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.photo,
      };
    default:
      return state;
  }
};
