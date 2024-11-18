import { createSlice } from "@reduxjs/toolkit";

const allBlogsSlice = createSlice({
    name: "allBlogs",
    initialState: {
        apiStatus: "init",
        allBlogs: null
    },
    reducers: {
        upDateAllBlogs: (state, action) => {
            state.apiStatus = action.payload.status;
            if (action.payload.status === "success") {
                state.allBlogs = action.payload.data
            }
        }
    }
})

export const { upDateAllBlogs } = allBlogsSlice.actions
export default allBlogsSlice