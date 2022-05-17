import React, { useState } from "react";

import { useAppSelector } from "../../app/hooks";
import Login from "../../components/login";

import Question from "../../components/question";
import { QuizQuestion } from "./quizStoreSlice";

const getCurrentQuestion = (
  questions: QuizQuestion[]
): QuizQuestion | undefined => {
  const filteredQuestions = questions.filter((item) => {
    return item.isFinished === false;
  });

  return filteredQuestions[0];
};

const QuizPage: React.FC = () => {
  const questions = useAppSelector((state) => state.quiz.questions);

  //якщо довжина = 1, це значить, що у всіх інших елементів масиву isFinished = true
  const isLastQuestion =
    questions.filter((question) => question.isFinished === false).length === 1;

  const currentQuestion = getCurrentQuestion(questions);

  if (currentQuestion === undefined) {
    return null;
  }

  return (
    <div>
      <Question
        quizQuestion={currentQuestion}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};

export default QuizPage;
