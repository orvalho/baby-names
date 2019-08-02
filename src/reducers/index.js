import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import namesReducer from './namesReducer';
import authReducer from './authReducer';

export default combineReducers({names: namesReducer, form: formReducer, auth: authReducer});
