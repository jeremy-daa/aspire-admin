import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with first_name, last_name, email, content, and date
export interface Booking {
    _id: any;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    tour: string;
    package: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Booking = {
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    tour: "",
    package: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeBookingSlice = createSlice({
    name: "activeBooking",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveBooking: (state, action: PayloadAction<Booking>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.tour = action.payload.tour;
            state.tour = action.payload.tour;
            state.package = action.payload.package;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveBooking } = activeBookingSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveBooking = (state: RootState) => state.activeBooking;

// export reducer
export default activeBookingSlice.reducer;
