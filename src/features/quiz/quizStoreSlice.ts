import { createSlice } from "@reduxjs/toolkit";

export interface BackendSong {
  audio: string;
  description: string;
  id: string;
  image: string;
  name: string;
  songTitle: string;
}

export interface Song extends BackendSong {
  isAnswered: boolean;
  isActive: boolean;
}

export interface BackendQuizQuestion {
  genre: string;
  id: string;
  data: BackendSong[];
}

export interface QuizQuestion {
  genre: string;
  id: string;
  questionAudioUrl: string;
  isFinished: boolean;
  isCorrectAnswerSelected: boolean;
  correctAnswerId: string;
  songs: Song[];
}

export interface QuizState {
  questions: QuizQuestion[];
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
