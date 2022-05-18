import { createSlice } from "@reduxjs/toolkit"

export const settingSlice = createSlice({
  name: "write/setting",
  initialState: {
    randomness: 0.4,
    fluency: 50,
  },
  reducers: {
    setRandomness: (state, action) => {
      state.randomness = parseFloat(action.payload)
    },
    setFluency: (state, action) => {
      state.fluency = parseInt(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRandomness, setFluency } = settingSlice.actions
export default  settingSlice.reducer
