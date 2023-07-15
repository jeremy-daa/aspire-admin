import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface BlogModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: BlogModalToggleState = {
  value: false,
};

export const blogModalToggleSlice = createSlice({
  name: "blogModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleBlogModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleBlogModal } = blogModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBlogModalToggle = (state: RootState) => state.blogModalToggle.value;

export default blogModalToggleSlice.reducer;
