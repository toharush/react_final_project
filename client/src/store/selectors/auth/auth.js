export const getCurrentUser = state => state.authSlice.user
export const isLogin = state => Boolean(state.authSlice.user);
export const isAdmin = state => state.authSlice.admin;
export const isAuthLoading = state => state.authSlice.loading;