import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
}

interface InitialState {
  cart: Product[];
}

const initialState: InitialState = {
  cart: JSON.parse(localStorage.getItem("carted") ||  "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartproducts: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex === -1) {
        state.cart.push(action.payload);
        localStorage.setItem("carted", JSON.stringify(state.cart));
      }
    },
    dislikeProduct: (state, action) => {
      const { id } = action.payload;
      const updatedLikedProducts = state.cart.filter(
        (product) => product.id !== id
      );
      state.cart = updatedLikedProducts;
      localStorage.setItem(
        "carted",
        JSON.stringify(updatedLikedProducts)
      );
    },
  },
});

export default cartSlice.reducer;
export const { cartproducts, dislikeProduct } = cartSlice.actions;
