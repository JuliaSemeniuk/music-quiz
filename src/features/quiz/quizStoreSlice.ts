import { createSlice } from "@reduxjs/toolkit";

export interface Song {
  audio: string;
  description: string;
  id: string;
  image: string;
  name: string;
  songTitle: string;
}

export interface Question {
  genre: string;
  id: string;
  data: Song[];
}

export interface QuizState {
  questions: Question[];
}

const initialState: QuizState = {
  questions: [],
};

export const quizStoreSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    init: (state, action) => {
      console.log("action", action);
      state.questions = action.payload;
    },
  },
});

export const { init } = quizStoreSlice.actions;

export default quizStoreSlice.reducer;
