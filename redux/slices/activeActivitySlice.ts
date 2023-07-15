import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Activity {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    startup_sector: string;
    startup_highlight: string;
    pitchdeck: string;
    company: string;
    position: string;
}

// define initial state
const initialState: Activity = {
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    startup_sector: "",
    startup_highlight: "",
    pitchdeck: "",
    company: "",
    position: "",
};

// create slice
export const activeActivitySlice = createSlice({
    name: "activeActivity",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveActivity: (state, action: PayloadAction<Activity>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.startup_sector = action.payload.startup_sector;
            state.startup_highlight = action.payload.startup_highlight;
            state.pitchdeck = action.payload.pitchdeck;
            state.company = action.payload.company;
            state.position = action.payload.position;
        },
    },
});


// export actions
export const { changeActiveActivity } = activeActivitySlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveActivity = (state: RootState) => state.activeActivity;

// export reducer
export default activeActivitySlice.reducer;
