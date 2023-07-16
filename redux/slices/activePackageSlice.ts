import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with name, image, type, content, and date
export interface Package {
    _id: any;
    name: string;
    image: string;
    description: string;
    aglp: number;
}

// define initial state
const initialState: Package = {
    _id: "",
    name: "",
    image: "",
    description: "",
    aglp: 0,
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
            state.image = action.payload.image;
            state.description = action.payload.description;
            state.aglp = action.payload.aglp;
        },
    },
});


// export actions
export const { changeActivePackage } = activePackageSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActivePackage = (state: RootState) => state.activePackage;

// export reducer
export default activePackageSlice.reducer;
