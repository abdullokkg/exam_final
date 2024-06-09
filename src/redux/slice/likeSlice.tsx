import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
}

interface InitialState {
  likedProducts: Product[];
}

const initialState: InitialState = {
  likedProducts: JSON.parse(localStorage.getItem("likedProducts") || "[]"),
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeProduct: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.likedProducts.findIndex(
        (product) => product.id === id
      );
      if (existingProductIndex === -1) {
        state.likedProducts.push(action.payload);
        localStorage.setItem(
          "likedProducts",
          JSON.stringify(state.likedProducts)
        );
      }
    },
    dislikeProduct: (state, action) => {
      const { id } = action.payload;
      const updatedLikedProducts = state.likedProducts.filter(
        (product) => product.id !== id
      );
      state.likedProducts = updatedLikedProducts;
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );
    },
  },
});

export default likeSlice.reducer;
export const { likeProduct, dislikeProduct } = likeSlice.actions;
