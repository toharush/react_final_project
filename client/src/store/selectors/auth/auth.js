import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCurrentUser = state => state.authSlice.user
export const isLogin = state => Boolean(state.authSlice.user);
export const isAuthLoading = state => state.authSlice.loading;