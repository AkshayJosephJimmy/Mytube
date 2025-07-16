import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";


const myStore=configureStore({
    reducer:{
        video: videoReducer
    }
})



export default myStore;







