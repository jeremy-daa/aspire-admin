import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Startup {
    _id: string;
    name: string;
    position: string;
    email: string;
    phone: string;
    company_name: string;
    company_website: string;
    company_description: string;
    company_stage: string;
    company_industry: string;
    company_size: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Startup = {
    _id: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    company_name: "",
    company_website: "",
    company_description: "",
    company_stage: "",
    company_industry: "",
    company_size: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeStartupSlice = createSlice({
    name: "activeStartup",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveStartup: (state, action: PayloadAction<Startup>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.position = action.payload.position;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.company_name = action.payload.company_name;
            state.company_website = action.payload.company_website;
            state.company_description = action.payload.company_description;
            state.company_stage = action.payload.company_stage;
            state.company_industry = action.payload.company_industry;
            state.company_size = action.payload.company_size;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveStartup } = activeStartupSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveStartup = (state: RootState) => state.activeStartup;

// export reducer
export default activeStartupSlice.reducer;
