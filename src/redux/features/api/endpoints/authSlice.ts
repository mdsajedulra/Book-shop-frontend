import { createSlice } from '@reduxjs/toolkit';

type TUser = {
    name: string;
    email: string;
    role: string;
  };
  
  type TAuthState = {
    user: null | TUser;
    token: null | string;
  };

  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");
  
  const initialState: TAuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken || null,
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});


export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
