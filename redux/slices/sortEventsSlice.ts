import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SortEventsByNewestState {
  value: boolean;
}

const initialState: SortEventsByNewestState = {
  value: true,
};

export const sortEventsSlice = createSlice({
  name: "sortEvents",
  initialState,
  reducers: {
    setSortEventsByNewest: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setSortEventsByNewest } = sortEventsSlice.actions;

export const selectSortEventsByNewest = (state: RootState) =>
  state.sortEvents.value;

export default sortEventsSlice.reducer;
