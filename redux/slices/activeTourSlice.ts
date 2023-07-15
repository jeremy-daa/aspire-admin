import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with name, image, type, content, and date
export interface Tour {
    _id: any;
    name: string;
    images: string[];
    category: string;
    title: string;
    titleMotto: string;
    description: string;
    tour_program: object[];
    no_of_days: number;
    included: string[];
    not_included: string[];
    price: number;
    createdAt?: string;
    updatedAt?: string;
}

// define initial state
const initialState: Tour = {
    _id: "",
    name: "",
    images: [],
    category: "",
    title: "",
    titleMotto: "",
    description: "",
    tour_program: [],
    no_of_days: 0,
    included: [],
    not_included: [],
    price: 0,
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeTourSlice = createSlice({
    name: "activeTour",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveTour: (state, action: PayloadAction<Tour>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.images = action.payload.images;
            state.category = action.payload.category;
            state.title = action.payload.title;
            state.titleMotto = action.payload.titleMotto;
            state.description = action.payload.description;
            state.tour_program = action.payload.tour_program;
            state.no_of_days = action.payload.no_of_days;
            state.included = action.payload.included;
            state.not_included = action.payload.not_included;
            state.price = action.payload.price;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveTour } = activeTourSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveTour = (state: RootState) => state.activeTour;

// export reducer
export default activeTourSlice.reducer;
