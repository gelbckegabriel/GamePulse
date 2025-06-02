import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    name: "",
    nickname: "",
    xp: "",
    favoriteSport: "",
    email: "",
    city: "",
    state: "",
    address: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.nickname = action.payload.nickname;
      state.user.xp = action.payload.xp;
      state.user.favoriteSport = action.payload.favoriteSport;
      state.user.email = action.payload.email;
      state.user.city = "Curitiba";
      state.user.state = "PR";
      //   state.user.address = action.payload.address;
    },
    signOutUser: (state) => {
      state.user.id = "";
      state.user.name = "";
      state.user.nickname = "";
      state.user.xp = "";
      state.user.favoriteSport = "";
      state.user.email = "";
      state.user.city = "";
      state.user.state = "";
      // state.user.address = "";
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;
