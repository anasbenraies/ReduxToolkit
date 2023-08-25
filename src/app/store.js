import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "../features/RootReducer"

export default configureStore({
    reducer:{
        root:rootReducer,
    }
})


