import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import "./App.scss";

import FinalScore from "./components/final-score";
import Login from "./components/login";
import QuizPage from "./features/quiz/QuizPage";

import { init } from "./features/quiz/quizStoreSlice";

import { dataForStore, makeRandom } from "./utils/utils";
import { url } from "./constants/constants";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const preResult = await fetch(url);
      const result = await preResult.json();
      dispatch(init(makeRandom(dataForStore(result))));
    };

    getData();
  }, []);

  useEffect(() => {}, []);

  const isNameReady = useAppSelector((state) => state.quiz.isNameReady);
  const questions = useAppSelector((state) => state.quiz.questions);
  const isQuizEnded = questions.every(
    (question) => question.isFinished === true
  );
  const userName = useAppSelector((state) => state.quiz.userName);

  return (
    <div className="wrapper">
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
