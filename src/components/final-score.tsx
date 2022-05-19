import { useAppSelector, useAppDispatch } from "../app/hooks";
import { makeQuizReadyToRepeat } from "../features/quiz/quizStoreSlice";
import Button from "./button";

interface Props {
  userName: string;
}

const FinalScore: React.FC<Props> = ({ userName }) => {
  const dispatch = useAppDispatch();

  const finalScore = useAppSelector((state) => state.quiz.finalScore);
  const repeatQuiz = () => {
    dispatch(makeQuizReadyToRepeat(""));
  };
  return (
    <div>
      <div>{finalScore}</div>
      <div>
        {finalScore < 10
          ? `${userName}, you can do better, try again!`
          : `${userName}, did so great!`}
      </div>
      <Button onButtonClick={repeatQuiz} title="try again" />
    </div>
  );
};

export default FinalScore;
