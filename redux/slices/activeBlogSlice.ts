import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with title, image, desc, content, and date
export interface Blog {
    _id: any;
    title: string;
    image: string;
    desc: string;
    markdown: string;
    sanitizedHtml: string;
    createdAt: string;
    updatedAt: string;
}

// define initial state
const initialState: Blog = {
    _id: "",
    title: "",
    image: "",
    desc: "",
    markdown: "",
    sanitizedHtml: "",
    createdAt: "",
    updatedAt: "",
};

// create slice
export const activeBlogSlice = createSlice({
    name: "activeBlog",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeActiveBlog: (state, action: PayloadAction<Blog>) => {
            state._id = action.payload._id;
            state.title = action.payload.title;
            state.image = action.payload.image;
            state.desc = action.payload.desc;
            state.markdown = action.payload.markdown;
            state.sanitizedHtml = action.payload.sanitizedHtml;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
        },
    },
});


// export actions
export const { changeActiveBlog } = activeBlogSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveBlog = (state: RootState) => state.activeBlog;

// export reducer
export default activeBlogSlice.reducer;
