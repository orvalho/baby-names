import {CHANGE_AUTH} from './types';

export default isSignedIn => async dispatch => {
  const name = isSignedIn
    ? await window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName()
    : null;

  const email = isSignedIn
    ? await window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()
    : null;

  dispatch({
    type: CHANGE_AUTH,
    payload: {
      isSignedIn,
      name,
      email
    }
  });
};
