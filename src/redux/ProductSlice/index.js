import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";

const initialState = {
  my_products: [],
  my_products_loading: false,
  my_products_error: null,
};

export const GET_ALL_PRODUCTS = createAsyncThunk("api/products", async () => {
  try {
    const { token } = await AsyncStorage.getItem("token").then((kemi) => {
      return JSON.parse(kemi);
    });

    const { data } = await axios.get(`${BASE_URL}/products`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
});

export const ProductSlice = createSlice({
  name: "product_slice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.my_products = [action.payload, ...state.my_products];
    },
    emptyCart: (state, action) => {
      state.my_products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GET_ALL_PRODUCTS.pending, (state) => {
      state.my_products_loading = true;
    });

    builder.addCase(GET_ALL_PRODUCTS.fulfilled, (state, action) => {
      state.my_products_loading = false;
      state.my_products = action.payload;
    });
    builder.addCase(GET_ALL_PRODUCTS.rejected, (state, action) => {
      state.my_products_loading = false;
      state.my_products_error = action.error;
    });
  },
});

export const { addToCart, emptyCart } = ProductSlice.actions;
export default ProductSlice.reducer;
