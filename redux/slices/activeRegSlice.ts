import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Reg {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    telegram: string;
    gender: string;
    have_team: boolean;
    previous_experience: boolean;
    why_participate: string;
    additional_info: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Reg = {
    _id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    telegram: "",
    gender: "",
    have_team: false,
    previous_experience: false,
    why_participate: "",
    additional_info: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeRegSlice = createSlice({
    name: "activeReg",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveReg: (state, action: PayloadAction<Reg>) => {
            state._id = action.payload._id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.telegram = action.payload.telegram;
            state.gender = action.payload.gender;
            state.have_team = action.payload.have_team;
            state.previous_experience = action.payload.previous_experience;
            state.why_participate = action.payload.why_participate;
            state.additional_info = action.payload.additional_info;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveReg } = activeRegSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveReg = (state: RootState) => state.activeReg;

// export reducer
export default activeRegSlice.reducer;
