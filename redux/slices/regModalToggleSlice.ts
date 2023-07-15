import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface RegModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: RegModalToggleState = {
  value: false,
};

export const regModalToggleSlice = createSlice({
  name: "regModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleRegModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleRegModal } = regModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRegModalToggle = (state: RootState) => state.regModalToggle.value;

export default regModalToggleSlice.reducer;
