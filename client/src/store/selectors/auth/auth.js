export const getCurrentUser = (state) => state.auth.user;
export const isLogin = (state) => Boolean(state.auth.user);
export const isAdmin = (state) => state.auth.admin.isAdmin;
export const getAdminMsg = (state) => state.auth.admin.msg;
export const isAuthLoading = (state) => state.auth.loading;
