import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const initialState = {
  userInfo: {},
  userLoading: false,
  userError: null,
};

export const GET_USER_INFO = createAsyncThunk("/api/user", async () => {
  const { token, id } = await AsyncStorage.getItem("token").then((res) => {
    return JSON.parse(res);
  });
  const { data, status } = await axios.get(`${BASE_URL}/users/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
});

export const UserSlice = createSlice({
  name: "user_slice",
  initialState: initialState,
  reducers: {
    increaseCount: (state, action) => {},
    decreaseCount: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(GET_USER_INFO.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(GET_USER_INFO.fulfilled, (state, action) => {
      // DO THIS
      state.userInfo = action.payload;
      state.userLoading = false;
    });
    builder.addCase(GET_USER_INFO.rejected, (state, action) => {
      // DO THIS
      state.userLoading = false;
    });
  },
});

export default UserSlice.reducer;
