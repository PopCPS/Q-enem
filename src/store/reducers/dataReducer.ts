import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IStates, UserAnswer } from "../../lib/interfaces";

const initialState: IStates = {
  questionIndex: 1,
  answerArray: [],
  isLeaveModalOpen: false,
  isFinishModalOpen: false,
}

export const dataSlice = createSlice({
  name: "pageStates",
  initialState,
  reducers: {
    set_questionIndex: (state, action: PayloadAction<number>) => {
      state.questionIndex = action.payload
    },
    set_answerArray: (state, action: PayloadAction<UserAnswer[]>) => {
      state.answerArray = action.payload
    },
    set_isLeaveModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isLeaveModalOpen = action.payload
    },
    set_isFinishModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isFinishModalOpen = action.payload
    },
  }
})

export const {
  set_questionIndex,
  set_answerArray,
  set_isLeaveModalOpen,
  set_isFinishModalOpen,
} = dataSlice.actions

export default dataSlice.reducer