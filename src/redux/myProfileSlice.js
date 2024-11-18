import { createSlice } from "@reduxjs/toolkit";

const myProfileSlice = createSlice({
    name: "myProfile",
    initialState: {
        apiStatus: "init",
        myProfile: null
    },
    reducers: {
        updateMyProFile: (state, action) => {
            state.apiStatus = action.payload.status;
            if (action.payload.status === "success") {
                state.myProfile = action.payload.data
            }
        }
    }
})

export const { updateMyProFile } = myProfileSlice.actions
export default myProfileSlice