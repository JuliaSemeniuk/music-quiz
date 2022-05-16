import { createSlice } from "@reduxjs/toolkit";
import Question from "../../components/question";

export interface BackendSong {
  audio: string;
  description: string;
  id: string;
  image: string;
  name: string;
  songTitle: string;
}

export interface Song extends BackendSong {
  isSelected: boolean;
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
    makeOptionSelected: (state, action) => {
      state.questions.forEach((question) => {
        if (question.correctAnswerId === action.payload) {
          question.isCorrectAnswerSelected = true;
        }
        question.songs.forEach((song) => {
          if (song.id === action.payload) {
            song.isSelected = true;
          }
        });
      });
    },
  },
});

export const { init, makeOptionSelected } = quizStoreSlice.actions;

export default quizStoreSlice.reducer;
