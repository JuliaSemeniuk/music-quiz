import { QuizQuestion } from "../features/quiz/quizStoreSlice";
import Button from "./button";
import Option from "./option";
import OptionInfo from "./option-info";

//next-question-button
import {
  makeQuestionFinished,
  addScore,
} from "../features/quiz/quizStoreSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import React from "react";

interface Props {
  quizQuestion: QuizQuestion;
  isLastQuestion: boolean;
}

const Question: React.FC<Props> = ({ quizQuestion, isLastQuestion }) => {
  const dispatch = useAppDispatch();

  const activeOptionInfo = quizQuestion.songs.filter(
    (currentOption) => currentOption.isActive === true
  )[0];

  const activateNextQuestionButton = (event: React.SyntheticEvent) => {
    dispatch(makeQuestionFinished(quizQuestion.id));
    dispatch(addScore(quizQuestion.score));
  };

  const isNextQuestionButtonDisabled = !quizQuestion.isCorrectAnswerSelected;

  return (
    <div>
      {/* Question[n].QuestionAudioUrl */}
      <audio controls src={`${quizQuestion.questionAudioUrl}`}></audio>

      {/* Question[n].Songs[] */}
      {quizQuestion.songs.map((song) => {
        return (
          <Option
            key={song.id}
            {...song}
            isCorrectAnswerSelected={quizQuestion.isCorrectAnswerSelected}
            correctAnswerId={quizQuestion.correctAnswerId}
          />
        );
      })}

      {activeOptionInfo ? (
        <OptionInfo
          id={activeOptionInfo.id}
          name={activeOptionInfo.name}
          songTitle={activeOptionInfo.songTitle}
          image={activeOptionInfo.image}
          audio={activeOptionInfo.audio}
          description={activeOptionInfo.description}
        />
      ) : null}

      <Button
        isDisabled={isNextQuestionButtonDisabled}
        onButtonClick={activateNextQuestionButton}
        title={!isLastQuestion ? "next question" : "see my score"}
      />
    </div>
  );
};

export default Question;
