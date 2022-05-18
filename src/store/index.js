import { configureStore } from "@reduxjs/toolkit"
import write from "./write"

export default configureStore({
  reducer: {
    write
  },
})
