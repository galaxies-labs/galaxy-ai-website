import { combineReducers } from "@reduxjs/toolkit"
import settingReducer from "./setting"

export * from "./setting"

export default combineReducers({
  setting: settingReducer,
})
