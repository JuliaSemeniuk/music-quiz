import React, { useEffect } from "react";
import { isTemplateTail } from "typescript";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import FinalScore from "./components/final-score";
import Login from "./components/login";
import Question from "./components/question";
import QuizPage from "./features/quiz/QuizPage";
import {
  BackendQuizQuestion,
  init,
  Song,
  QuizQuestion,
  BackendSong,
  quizStoreSlice,
} from "./features/quiz/quizStoreSlice";

//API Links:
const url = "https://levi9-song-quiz.herokuapp.com/api/data";
export const mediaUrl = "https://levi9-song-quiz.herokuapp.com/api/";

const chooseRandomSong = (songs: BackendSong[]) => {
  const randomValue = Math.random();

  if (randomValue < 0.25) {
    return songs[0];
  }
  if (randomValue > 0.25 && randomValue < 0.5) {
    return songs[1];
  }
  if (randomValue > 0.5 && randomValue < 0.75) {
    return songs[2];
  } else {
    return songs[3];
  }
};

//update format data as we need
const dataForStore = (beckendData: BackendQuizQuestion[]): QuizQuestion[] => {
  return beckendData.map((beckendQuiz, index) => {
    const randomSong = chooseRandomSong(beckendQuiz.data);
    console.log("randomSong", randomSong);
    return {
      genre: beckendQuiz.genre,
      id: beckendQuiz.id,
      questionAudioUrl: mediaUrl + randomSong.audio,
      isFinished: false,
      isCorrectAnswerSelected: false,
      correctAnswerId: randomSong.id,
      score: 4,
      songs: beckendQuiz.data.map((song) => {
        return {
          ...song,
          isSelected: false,
          isActive: false,
        };
      }),
    };
  });
};

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const preResult = await fetch(url);
      const result = await preResult.json();
      dispatch(init(dataForStore(result)));
    };

    getData();
  }, []);

  const isNameReady = useAppSelector((state) => state.quiz.isNameReady);
  const questions = useAppSelector((state) => state.quiz.questions);
  const isQuizEnded = questions.every(
    (question) => question.isFinished === true
  );
  const userName = useAppSelector((state) => state.quiz.userName);

  return (
    <div className="App">
      <div className="container">
        {!isNameReady ? (
          <Login />
        ) : !isQuizEnded ? (
          <QuizPage />
        ) : (
          <FinalScore userName={userName} />
        )}
      </div>
    </div>
  );
}

export default App;
