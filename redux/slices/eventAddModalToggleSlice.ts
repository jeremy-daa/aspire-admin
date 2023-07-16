import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface EventAddModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: EventAddModalToggleState = {
  value: false,
};

export const eventAddModalToggleSlice = createSlice({
  name: "eventAddModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleEventAddModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleEventAddModal } = eventAddModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEventModalToggle = (state: RootState) =>
  state.eventAddModalToggle.value;

export default eventAddModalToggleSlice.reducer;
