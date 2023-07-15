import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface BlogAddModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: BlogAddModalToggleState = {
  value: false,
};

export const blogAddModalToggleSlice = createSlice({
  name: "blogAddModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleBlogAddModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleBlogAddModal } = blogAddModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBlogModalToggle = (state: RootState) => state.blogAddModalToggle.value;

export default blogAddModalToggleSlice.reducer;
