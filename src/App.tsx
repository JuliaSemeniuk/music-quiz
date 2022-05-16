import React, { useEffect } from "react";
import { isTemplateTail } from "typescript";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import QuizPage from "./features/quiz/QuizPage";
import {
  BackendQuizQuestion,
  init,
  Song,
  QuizQuestion,
} from "./features/quiz/quizStoreSlice";

//API Links:
const url = "https://levi9-song-quiz.herokuapp.com/api/data";
const mediaUrl = "https://levi9-song-quiz.herokuapp.com/api/";

//update format data as we need
const dataForStore = (beckendData: BackendQuizQuestion[]): QuizQuestion[] => {
  return beckendData.map((beckendQuiz, index) => {
    return {
      genre: beckendQuiz.genre,
      id: beckendQuiz.id,
      questionAudioUrl: `${mediaUrl} + 'audio/' + ${index + 1}-1`,
      isFinished: false,
      isCorrectAnswerSelected: false,
      correctAnswerId: "1-1",
      songs: beckendQuiz.data.map((song) => {
        return {
          ...song,
          isAnswered: false,
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

  return (
    <div className="App">
      <div className="container">
        <QuizPage />
      </div>
    </div>
  );
}

export default App;
