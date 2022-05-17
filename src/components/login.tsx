import Button from "./button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fillUserName,
  makeQuizReadyToStart,
} from "../features/quiz/quizStoreSlice";
import React from "react";

const Login = () => {
  const dispatch = useAppDispatch();

  const getUserName = (event: any) => {
    dispatch(fillUserName(event.target.value));
  };

  const userName = useAppSelector((state) => state.quiz.userName);

  const startQuiz = () => {
    dispatch(makeQuizReadyToStart(""));
  };

  //   const isStartQuizButtonDisabled = !isNameReady;

  return (
    <div>
      <input
        value={userName}
        placeholder="type your name here..."
        type="text"
        onChange={getUserName}
      />
      {
        <Button
          onButtonClick={startQuiz}
          isDisabled={!userName.length}
          title="Start Quiz"
        />
      }
    </div>
  );
};

export default Login;
