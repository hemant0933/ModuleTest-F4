import { configureStore } from "@reduxjs/toolkit";
import  postReducer,{getPosts}  from "../features/getDataSlice";

export const store = configureStore({
    reducer:{
       posts: postReducer,
    },
})

store.dispatch(getPosts());

export default store;