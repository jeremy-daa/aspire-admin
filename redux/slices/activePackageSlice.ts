import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with name, image, type, content, and date
export interface Package {
    _id: any;
    name: string;
    description: string;
    type: string;
    total_no_of_days: number;
    tour_ids: string[],
    price: number;
    createdAt?: string;
    updatedAt?: string;
}

// define initial state
const initialState: Package = {
    _id: "",
    name: "",
    description: "",
    type: "",
    total_no_of_days: 0,
    tour_ids: [],
    price: 0,
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activePackageSlice = createSlice({
    name: "activePackage",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActivePackage: (state, action: PayloadAction<Package>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.type = action.payload.type;
            state.total_no_of_days = action.payload.total_no_of_days;
            state.tour_ids = action.payload.tour_ids;
            state.price = action.payload.price;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActivePackage } = activePackageSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActivePackage = (state: RootState) => state.activePackage;

// export reducer
export default activePackageSlice.reducer;
