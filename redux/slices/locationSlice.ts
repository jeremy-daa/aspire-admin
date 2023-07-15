import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define location state as enum type
export enum Location {
  Local = "Local",
  International = "International",
}

// define initial state
const initialState: Location = Location.Local;

// create slice
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // define action to change location

    // @ts-ignore
    changeLocation: (state, action: PayloadAction<Location>) => {
      return action.payload;
    },
  },
});

// export actions
export const { changeLocation } = locationSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectLocation = (state: RootState) => state.location;

// export reducer
export default locationSlice.reducer;
