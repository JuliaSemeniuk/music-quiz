import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import quizStoreSlice from "../features/quiz/quizStoreSlice";

export const store = configureStore({
  reducer: {
    quiz: quizStoreSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
