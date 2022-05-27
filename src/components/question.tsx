import React from "react";
import { QuizQuestion } from "../features/quiz/quizStoreSlice";

import Button from "./button/button";
import Option from "./option/option";
import OptionInfo from "./option-info/option-info";
import { mediaUrl } from "../constants/constants";

import {
  makeQuestionFinished,
  addScore,
} from "../features/quiz/quizStoreSlice";

import { useAppDispatch } from "../app/hooks";

import "../components/question.scss";

import AudioPicture from "../images/audio-picture.svg";

interface Props {
  quizQuestion: QuizQuestion;
  isLastQuestion: boolean;
  title: string;
  isCorrectAnswerSelected: boolean;
}

const Question: React.FC<Props> = ({ quizQuestion, isLastQuestion, title }) => {
  const dispatch = useAppDispatch();

  const activeOptionInfo = quizQuestion.songs.filter(
    (currentOption) => currentOption.isActive === true
  )[0];

  const correctAnswer = quizQuestion.songs.filter((song) => {
    if (
      quizQuestion.isCorrectAnswerSelected === true &&
      song.id === quizQuestion.correctAnswerId
    ) {
      return true;
    }
  })[0];

  const correctImage = correctAnswer
    ? mediaUrl + correctAnswer.image
    : AudioPicture;

  console.log(correctAnswer);

  const activateNextQuestionButton = (event: React.SyntheticEvent) => {
    dispatch(makeQuestionFinished(quizQuestion.id));
    dispatch(addScore(quizQuestion.score));
  };

  const isNextQuestionButtonDisabled = !quizQuestion.isCorrectAnswerSelected;

  return (
    <>
      <div className="question__container">
        <div className="audio__container">
          <div className="question__header">
            <div className="question__title">{title} song</div>
            <div className="question__subtitle">
              Listen to the audio and guess what song is it from the list
            </div>
          </div>
          <div className="question__audio">
            <img
              className="audio__picture"
              id="audio_picture"
              src={correctImage}
              alt="audio"
            />
            <audio
              className="audio__player"
              controls
              src={`${quizQuestion.questionAudioUrl}`}
            ></audio>
          </div>

          <div className="question__options">
            <ul className="options__list">
              {quizQuestion.songs.map((song) => {
                return (
                  <Option
                    key={song.id}
                    {...song}
                    isCorrectAnswerSelected={
                      quizQuestion.isCorrectAnswerSelected
                    }
                    correctAnswerId={quizQuestion.correctAnswerId}
                    questionId={quizQuestion.id}
                  />
                );
              })}
            </ul>
          </div>
        </div>

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
      </div>

      <Button
        isDisabled={isNextQuestionButtonDisabled}
        onButtonClick={activateNextQuestionButton}
        title={!isLastQuestion ? "next question" : "see my score"}
      />
    </>
  );
};

export default Question;
