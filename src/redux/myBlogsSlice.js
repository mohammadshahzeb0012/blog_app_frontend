import { createSlice } from "@reduxjs/toolkit";

const myBlogsSlie = createSlice({
    name: "myBlogs",
    initialState: {
        apiStatus: "init",
        myBlogs: null
    },
    reducers: {
        updateMyBlogs: (state, action) => {
            state.apiStatus = action.payload.status;
            if (action.payload.status === "success") {
                state.myBlogs = action.payload.data
            }
        }
    }
})

export const { updateMyBlogs } = myBlogsSlie.actions
export default myBlogsSlie