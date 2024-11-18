import allBlogsSlice from "./allBlogsSlice";

import { configureStore } from '@reduxjs/toolkit';
import myBlogsSlie from "./myBlogsSlice";
import myProfileSlice from "./myProfileSlice";

const store = configureStore({
    reducer: {
        allBlogs: allBlogsSlice.reducer,
        myBlogs: myBlogsSlie.reducer,
        myProfile: myProfileSlice.reducer
    }
})

export default store