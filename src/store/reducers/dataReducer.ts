import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IStates } from "../../lib/interfaces";

const initialState: IStates = {
  questionIndex: 1,
  answerArray: [],
  isLeaveModalOpen: false
}

export const dataSlice = createSlice({
  name: "pageStates",
  initialState,
  reducers: {
    set_questionIndex: (state, action: PayloadAction<number>) => {
      state.questionIndex = action.payload
    },
    set_answerArray: (state, action: PayloadAction<string[]>) => {
      state.answerArray = action.payload
    },
    set_isLeaveModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isLeaveModalOpen = action.payload
    },
  }
})

export const {
  set_questionIndex,
  set_answerArray,
  set_isLeaveModalOpen
} = dataSlice.actions

export default dataSlice.reducer