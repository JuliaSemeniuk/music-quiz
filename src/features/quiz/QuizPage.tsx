import React, { useState } from "react";

import { useAppSelector } from "../../app/hooks";
import Question from "../../components/question";
import { QuizQuestion } from "./quizStoreSlice";
import QuestionHeader from "../../components/qustion-header";
import ProgressBar from "../../components/progress-bar";

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

  const progressBar = questions.map((question) => {
    const сurrentBarItem = questions.filter((question) => {
      return question.isFinished === false;
    })[0];

    const isCurrentBarItem = question.id === сurrentBarItem.id ? true : false;

    return {
      genre: question.genre,
      isFinished: question.isFinished,
      isCorrectAnswerSelected: question.isCorrectAnswerSelected,
      isCurrentBarItem,
    };
  });

  return (
    <div>
      <QuestionHeader />
      <ProgressBar progressBar={progressBar} />
      <Question
        quizQuestion={currentQuestion}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};

export default QuizPage;
