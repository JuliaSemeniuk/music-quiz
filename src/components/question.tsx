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
import "../components/question.scss";

import AudioPicture from "../images/audio-picture.svg";
import AudioPlayPicture from "../images/play-icon.svg";

interface Props {
  quizQuestion: QuizQuestion;
  isLastQuestion: boolean;
  title: string;
}

const Question: React.FC<Props> = ({ quizQuestion, isLastQuestion, title }) => {
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
              src={AudioPicture}
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
