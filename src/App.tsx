import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import "./App.scss";

import FinalScore from "./components/final-score/final-score";
import Login from "./components/login/login";
import QuizPage from "./features/quiz/QuizPage";

import { init } from "./features/quiz/quizStoreSlice";

import { dataForStore, makeRandom } from "./utils/utils";
import { url } from "./constants/constants";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isNameReady = useAppSelector((state) => state.quiz.isNameReady);
  const questions = useAppSelector((state) => state.quiz.questions);
  const isQuizEnded = questions.every(
    (question) => question.isFinished === true
  );
  const userName = useAppSelector((state) => state.quiz.userName);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const preResult = await fetch(url);
      const result = await preResult.json();
      setIsLoading(false);
      dispatch(init(makeRandom(dataForStore(result))));
    };

    getData();
  }, []);

  useEffect(() => {
    if (!isNameReady) {
      navigate("/");
      return;
    }

    if (isQuizEnded) {
      navigate("/score");
      return;
    }

    navigate("/quiz");
  }, [isNameReady, isQuizEnded]);

  return (
    <div className="wrapper">
      <div className="container">
        <Routes>
          <Route path="/" element={<Login isLoading={isLoading} />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/score" element={<FinalScore userName={userName} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
