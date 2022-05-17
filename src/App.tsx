import React, { useEffect } from "react";
import { isTemplateTail } from "typescript";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Login from "./components/login";
import QuizPage from "./features/quiz/QuizPage";
import {
  BackendQuizQuestion,
  init,
  Song,
  QuizQuestion,
  BackendSong,
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

  return (
    <div className="App">
      <div className="container">{!isNameReady ? <Login /> : <QuizPage />}</div>
    </div>
  );
}

export default App;
