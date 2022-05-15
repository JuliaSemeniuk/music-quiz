import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import { Quiz } from "./features/quiz/Quiz";
import { init } from "./features/quiz/quizStoreSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const midResult = await fetch(
        "https://levi9-song-quiz.herokuapp.com/api/data"
      );
      const result = await midResult.json();
      dispatch(init(result));
    };

    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">{<Quiz />}</div>
    </div>
  );
}

export default App;
