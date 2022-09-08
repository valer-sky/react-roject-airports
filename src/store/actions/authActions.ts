

import axios from '../../axios';
import { AppDispatch } from '../index';
import { authSlice } from '../slices/AuthSlice';

interface AuthResponse {
    access: string,
    refresh: string
}
interface AuthData {
    username: string,
    password: string
}


export const register = (data: AuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
        const response = await axios.post<AuthResponse>(`auth/register`, data);
        dispatch(authSlice.actions.login({
            username: data.username,
            access: response.data.access
        }))
          }
            
          
         catch(e) {
            
        }
    }
