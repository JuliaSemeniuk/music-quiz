import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import "./App.scss";

import FinalScore from "./pages/final-score/final-score-page";
import Login from "./pages/login/login-page";
import QuizPage from "./pages/quiz/quiz-page";

import { init } from "./app/quiz-store-slice";

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
  }, [dispatch]);

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
  }, [isNameReady, isQuizEnded, navigate]);

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
