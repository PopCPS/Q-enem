import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IStates } from "../../lib/interfaces";

const initialState: IStates = {
  questionIndex: 0
}

export const dataSlice = createSlice({
  name: "pageStates",
  initialState,
  reducers: {
    set_questionIndex: (state, action: PayloadAction<number>) => {
      state.questionIndex = action.payload
    }
  }
})

export const {
  set_questionIndex
} = dataSlice.actions

export default dataSlice.reducer