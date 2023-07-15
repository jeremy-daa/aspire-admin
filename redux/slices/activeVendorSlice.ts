import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Vendor {
    _id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    company_name: string;
    company_website: string;
    email: string;
    phone: string;
    approved: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Vendor = {
    _id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    company_name: "",
    company_website: "",
    email: "",
    phone: "",
    approved: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeVendorSlice = createSlice({
    name: "activeVendor",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveVendor: (state, action: PayloadAction<Vendor>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.middle_name = action.payload.middle_name;
            state.last_name = action.payload.last_name;
            state.company_name = action.payload.company_name;
            state.company_website = action.payload.company_website;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.approved = action.payload.approved;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveVendor } = activeVendorSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveVendor = (state: RootState) => state.activeVendor;

// export reducer
export default activeVendorSlice.reducer;
