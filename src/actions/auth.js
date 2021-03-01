export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

const authenticateAction = (username) => ({
  type: AUTH_SUCCESS,
  payload: username,
});

const logoutAction = () => ({
  type: AUTH_SUCCESS,
});

export function authenticate(username) {
  return (dispatch) => {
    dispatch(authenticateAction(username));
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutAction());
  };
}
