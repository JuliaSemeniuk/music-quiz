import { createSlice } from "@reduxjs/toolkit";
import { makeRandom } from "../../App";

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
  score: number;

  songs: Song[];
}

export interface QuizState {
  userName: string;
  isNameReady: boolean;
  finalScore: number;
  isRepeat: boolean;
  questions: QuizQuestion[];
}

const initialState: QuizState = {
  userName: "",
  isNameReady: false,
  finalScore: 0,
  isRepeat: false,
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

    makeOptionActive: (state, action) => {
      state.questions.forEach((question) => {
        question.songs.forEach((song) => {
          if (song.id === action.payload) {
            song.isActive = true;
          } else {
            song.isActive = false;
          }
        });
      });
    },

    makeQuestionFinished: (state, action) => {
      state.questions.forEach((question) => {
        if (question.id === action.payload) {
          question.isFinished = true;
        }
      });
    },

    fillUserName: (state, action) => {
      state.userName = action.payload;
    },

    makeQuizReadyToStart: (state, action) => {
      state.isNameReady = true;
    },

    setQuestionScore: (state, action) => {
      state.questions.forEach((question) => {
        if (question.id === action.payload) {
          question.score = question.score - 1;
        }
      });
    },

    addScore: (state, action) => {
      state.finalScore = state.finalScore + action.payload;
    },

    makeQuizReadyToRepeat: (state, action) => {
      state.isRepeat = true;
      state.finalScore = 0;
      state.questions.forEach((question) => {
        question.isCorrectAnswerSelected = false;
        question.isFinished = false;
        question.score = 4;
        question.songs.forEach((song) => {
          song.isSelected = false;
        });
      });
      state.questions = makeRandom(state.questions);
    },
  },
});

export const {
  init,
  makeOptionSelected,
  makeOptionActive,
  makeQuestionFinished,
  fillUserName,
  makeQuizReadyToStart,
  setQuestionScore,
  addScore,
  makeQuizReadyToRepeat,
} = quizStoreSlice.actions;

export default quizStoreSlice.reducer;
