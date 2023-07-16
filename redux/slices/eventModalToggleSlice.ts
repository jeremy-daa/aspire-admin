import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface EventModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: EventModalToggleState = {
  value: false,
};

export const eventModalToggleSlice = createSlice({
  name: "eventModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleEventModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleEventModal } = eventModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEventModalToggle = (state: RootState) =>
  state.eventModalToggle.value;

export default eventModalToggleSlice.reducer;
