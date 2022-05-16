import React, { useState } from "react";

import { useAppSelector } from "../../app/hooks";

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

  const currentQuestion = getCurrentQuestion(questions);

  if (currentQuestion === undefined) {
    return null;
  }

  return (
    <div>
      {}
      <Question quizQuestion={currentQuestion} />
    </div>
  );
};

export default QuizPage;
