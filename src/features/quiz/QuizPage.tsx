import React from "react";

import { useAppSelector } from "../../app/hooks";

import Question from "../../components/question";
import { QuizQuestion } from "./quizStoreSlice";
import QuestionHeader from "../../components/question-header";
import ProgressBar from "../../components/progress-bar";

import "../quiz/QuizPage.scss";

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
    <div className="quiz__container">
      <QuestionHeader />
      <ProgressBar progressBar={progressBar} />
      <div className="quiz__question">
        <Question
          quizQuestion={currentQuestion}
          isLastQuestion={isLastQuestion}
          title={currentQuestion.genre}
          isCorrectAnswerSelected={currentQuestion.isCorrectAnswerSelected}
        />
      </div>
    </div>
  );
};

export default QuizPage;
