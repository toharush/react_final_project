import auth from "../../../lib/firebase";

export const getCurrentUser = (state) => state.auth.user ?? null;
export const isLogin = (state) => Boolean(state.auth.user);
export const isAdmin = (state) => state.auth.admin.isAdmin;
export const getAdminMsg = (state) => state.auth.admin.msg ?? [];
export const getAuthLoading = (state) => state.auth.loading;
export const getAuthError = (state) => state.auth.error;
