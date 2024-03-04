import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    signup: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, signup, logout, setUser } = userSlice.actions;

export default userSlice.reducer;
