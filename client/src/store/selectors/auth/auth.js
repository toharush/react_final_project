import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCurrentUser = () => cookies.get("user")
export const isLogin = () => Boolean(cookies.get("user"));
export const isAuthLoading = state => state.authSlice.loading;