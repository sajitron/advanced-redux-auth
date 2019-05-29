import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => (dispatch) => {
	axios.post('http://localhost:3090/signup', formProps);
};
// redux thunk allows us to return an action object or a function
